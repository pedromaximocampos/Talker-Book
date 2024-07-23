package com.talkerbook.api.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.talkerbook.api.dtos.books.BookDto;
import com.talkerbook.api.dtos.books.CreateBookDto;
import com.talkerbook.api.entities.BooksEntity;
import com.talkerbook.api.entities.UserEntity;
import com.talkerbook.api.responses.ApiResponse;
import com.talkerbook.api.services.BookService;
import com.talkerbook.api.utils.AuthenticationUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/books")
public class BookController {
    @Autowired
    private BookService bookService;

    @PostMapping("/create")
    public ResponseEntity<ApiResponse<BookDto>> createBook(
            @RequestPart("book") String bookJson,
            @RequestPart("cover") MultipartFile cover,
            @RequestPart("pdf") MultipartFile pdf,
            HttpServletRequest request
    ) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            CreateBookDto book = objectMapper.readValue(bookJson, CreateBookDto.class);

            UserEntity user = AuthenticationUtil.extractUserFromJwt(request);
            BooksEntity newBook = bookService.createBook(book, cover, pdf, user);
            BookDto newBookDto = BookDto.fromBooksEntity(newBook);
            ApiResponse<BookDto> response = new ApiResponse<>(false, "Livro criado com sucesso", Collections.singletonList(newBookDto));
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception e) {
            ApiResponse<BookDto> response = new ApiResponse<>(true, e.getMessage(), null);
            return ResponseEntity.badRequest().body(response);
        }
    }

    @GetMapping("/title/{title}")
    public ResponseEntity<ApiResponse<BookDto>> findBooksByTitle(@PathVariable String title) {
        try {
            List<BooksEntity> books = bookService.findBooksByTitle(title);
            List<BookDto> booksDto = books.stream().map(BookDto::fromBooksEntity).toList();
            ApiResponse<BookDto> response = new ApiResponse<>(false, "Título encontrado", booksDto);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse<BookDto> response = new ApiResponse<>(true, e.getMessage(), null);
            return ResponseEntity.badRequest().body(response);
        }
    }

    @GetMapping("/author/{author}")
    public ResponseEntity<ApiResponse<BookDto>> findBooksByAuthor(@PathVariable String author) {
        try {
            List<BooksEntity> books = bookService.findBooksByAuthor(author);
            List<BookDto> booksDto = books.stream().map(BookDto::fromBooksEntity).toList();
            ApiResponse<BookDto> response = new ApiResponse<>(false, "Autor encontrado", booksDto);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse<BookDto> response = new ApiResponse<>(true, e.getMessage(), null);
            return ResponseEntity.badRequest().body(response);
        }
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<ApiResponse<BookDto>> findBooksByCategory(@PathVariable String category) {
        try {
            List<BooksEntity> books = bookService.findBooksByCategory(category);
            List<BookDto> booksDto = books.stream().map(BookDto::fromBooksEntity).toList();
            ApiResponse<BookDto> response = new ApiResponse<>(false, "Categoria encontrada", booksDto);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse<BookDto> response = new ApiResponse<>(true, e.getMessage(), null);
            return ResponseEntity.badRequest().body(response);
        }
    }

    @GetMapping("/language/{language}")
    public ResponseEntity<ApiResponse<BookDto>> findBooksByLanguage(@PathVariable String language) {
        try {
            List<BooksEntity> books = bookService.findBooksByLanguage(language);
            List<BookDto> booksDto = books.stream().map(BookDto::fromBooksEntity).toList();
            ApiResponse<BookDto> response = new ApiResponse<>(false, "Linguagem encontrada", booksDto);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse<BookDto> response = new ApiResponse<>(true, e.getMessage(), null);
            return ResponseEntity.badRequest().body(response);
        }
    }

    @GetMapping("/isbn/{isbn}")
    public ResponseEntity<ApiResponse<BookDto>> findBookByIsbn(@PathVariable String isbn) {
        try {
            Optional<BooksEntity> book = bookService.findBookByIsbn(isbn);
            if (book.isPresent()) {
                BookDto bookDto = BookDto.fromBooksEntity(book.get());
                ApiResponse<BookDto> response = new ApiResponse<>(false, "Livro encontrado", Collections.singletonList(bookDto));
                return ResponseEntity.ok(response);
            } else {
                ApiResponse<BookDto> response = new ApiResponse<>(true, "Livro não encontrado", null);
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }
        } catch (Exception e) {
            ApiResponse<BookDto> response = new ApiResponse<>(true, e.getMessage(), null);
            return ResponseEntity.badRequest().body(response);
        }
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<ApiResponse<BookDto>> findBooksByUser(
            @PathVariable String userId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size
    ) {
        try {
            Page<BooksEntity> booksPage = bookService.findBooksByUser(userId, page, size);
            Page<BookDto> bookDtos = booksPage.map(BookDto::fromBooksEntity);
            ApiResponse<BookDto> response = new ApiResponse<>(false, "Livros encontrados", bookDtos.getContent());
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse<BookDto> response = new ApiResponse<>(true, e.getMessage(), null);
            return ResponseEntity.badRequest().body(response);
        }
    }

    @DeleteMapping("/{bookId}")
    public ResponseEntity<ApiResponse<String>> deleteBook(@PathVariable String bookId, HttpServletRequest request) {
        try {
            UserEntity user = AuthenticationUtil.extractUserFromJwt(request);
            bookService.deleteBook(UUID.fromString(bookId), user.getUserId());
            ApiResponse<String> response = new ApiResponse<>(false, "Livro deletado com sucesso", null);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse<String> response = new ApiResponse<>(true, "Erro ao deletar o livro: " + e.getMessage(), null);
            return ResponseEntity.status(500).body(response);
        }
    }
}
