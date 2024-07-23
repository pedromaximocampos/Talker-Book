package com.talkerbook.api.services;

import com.talkerbook.api.dtos.books.CreateBookDto;
import com.talkerbook.api.entities.BooksEntity;
import com.talkerbook.api.entities.UserEntity;
import com.talkerbook.api.repositories.BookRepository;
import com.talkerbook.api.types.FileType;
import com.talkerbook.api.utils.FileUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private UserService userService;

    public BooksEntity createBook(CreateBookDto bookDto, MultipartFile bookCover, MultipartFile bookPdf, UserEntity user) throws Exception {
        try {
            BooksEntity booksEntity = bookDto.toEntity();
            booksEntity.setUser(user);

            Optional<BooksEntity> existingBook = bookRepository.findByIsbn(bookDto.getIsbn());
            if (existingBook.isPresent()) {
                throw new Exception("Um livro com este ISBN já está cadastrado.");
            }

            String bookCoverPath = FileUtil.saveFile(bookCover, FileType.BOOK_COVER_IMAGE);
            String bookPdfPath = FileUtil.saveFile(bookPdf, FileType.PDF);

            booksEntity.setCoverImageLink(bookCoverPath);
            booksEntity.setPdfLink(bookPdfPath);

            return bookRepository.save(booksEntity);
        } catch (Exception e) {
            throw new Exception("Erro inesperado ao criar o livro.", e);
        }
    }

    public List<BooksEntity> findBooksByTitle(String title) throws Exception {
        try {
            List<BooksEntity> books = bookRepository.findByTitleContainingIgnoreCase(title);
            if (books.isEmpty()) {
                throw new Exception("Nenhum livro encontrado com o título fornecido.");
            }
            return books;
        } catch (Exception e) {
            throw new Exception("Erro ao buscar livros pelo título.", e);
        }
    }

    public List<BooksEntity> findBooksByAuthor(String author) throws Exception {
        try {
            List<BooksEntity> books = bookRepository.findByAuthorContainingIgnoreCase(author);
            if (books.isEmpty()) {
                throw new Exception("Nenhum livro encontrado com o autor fornecido.");
            }
            return books;
        } catch (Exception e) {
            throw new Exception("Erro ao buscar livros pelo autor.", e);
        }
    }

    public List<BooksEntity> findBooksByCategory(String category) throws Exception {
        try {
            List<BooksEntity> books = bookRepository.findByCategoryContainingIgnoreCase(category);
            if (books.isEmpty()) {
                throw new Exception("Nenhuma livro encontrado com a categoria fornecida.");
            }
            return books;
        } catch (Exception e) {
            throw new Exception("Erro ao buscar livros pela categoria.", e);
        }
    }

    public List<BooksEntity> findBooksByLanguage(String language) throws Exception {
        try {
            List<BooksEntity> books = bookRepository.findByLanguageContainingIgnoreCase(language);
            if (books.isEmpty()) {
                throw new Exception("Nenhum livro encontrado com o idioma fornecido.");
            }
            return books;
        } catch (Exception e) {
            throw new Exception("Erro ao buscar livros pelo idioma.", e);
        }
    }

    public Optional<BooksEntity> findBookByIsbn(String isbn) throws Exception {
        try {
            Optional<BooksEntity> book = bookRepository.findByIsbn(isbn);
            if (book.isEmpty()) {
                throw new Exception("Nenhum livro encontrado com o ISBN fornecido.");
            }
            return book;
        } catch (Exception e) {
            throw new Exception("Erro ao buscar livro pelo ISBN.", e);
        }
    }

    public Page<BooksEntity> findBooksByUser(String userId, int page, int size) throws Exception {
        try {
            UserEntity user = userService.getUserById(UUID.fromString(userId));
            Pageable pageable = PageRequest.of(page, size, Sort.by("createdAt").descending());
            Page<BooksEntity> booksPage = bookRepository.findByUser(user, pageable);
            if (booksPage.isEmpty()) {
                throw new Exception("Nenhum livro encontrado para o usuário fornecido.");
            }
            return booksPage;
        } catch (Exception e) {
            throw new Exception("Erro ao buscar livros pelo usuário.", e);
        }
    }

    public void deleteBook(UUID bookId, UUID userId) throws Exception {
        try {
            Optional<BooksEntity> bookOptional = bookRepository.findById(bookId);
            if (bookOptional.isEmpty()) {
                throw new Exception("Livro não encontrado");
            }
            BooksEntity book = bookOptional.get();

            UserEntity user = userService.getUserById(userId);

            if (!book.getUser().getUserId().equals(userId) && !user.isAdmin()) {
                throw new Exception("Você não tem permissão para deletar este livro");
            }

            if (book.getCoverImageLink() != null && !book.getCoverImageLink().isEmpty()) {
                FileUtil.deleteFile(book.getCoverImageLink(), FileType.BOOK_COVER_IMAGE);
            }
            if (book.getPdfLink() != null && !book.getPdfLink().isEmpty()) {
                FileUtil.deleteFile(book.getPdfLink(), FileType.PDF);
            }

            bookRepository.delete(book);
        } catch (Exception e) {
            throw new Exception("Erro ao deletar o livro", e);
        }
    }
}
