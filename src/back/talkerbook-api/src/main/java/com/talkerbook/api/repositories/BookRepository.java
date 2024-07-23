package com.talkerbook.api.repositories;

import com.talkerbook.api.entities.BooksEntity;
import com.talkerbook.api.entities.UserEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface BookRepository extends JpaRepository<BooksEntity, UUID> {
    List<BooksEntity> findByTitleContainingIgnoreCase(String title);
    List<BooksEntity> findByAuthorContainingIgnoreCase(String author);
    List<BooksEntity> findByCategoryContainingIgnoreCase(String category);
    List<BooksEntity> findByLanguageContainingIgnoreCase(String language);
    Optional<BooksEntity> findByIsbn(String isbn);
    Page<BooksEntity> findByUser(UserEntity user, Pageable pageable);
}
