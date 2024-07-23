package com.talkerbook.api.dtos.books;

import com.talkerbook.api.entities.BooksEntity;

import java.util.Date;

public class CreateBookDto {
    private String title;
    private String author;
    private String category;
    private String isbn;
    private String description;
    private Date releaseDate;
    private String language;

    public CreateBookDto(
            String title,
            String author,
            String category,
            String isbn,
            String description,
            Date releaseDate,
            String language
    ) {
        this.title = title;
        this.author = author;
        this.category = category;
        this.isbn = isbn;
        this.description = description;
        this.releaseDate = releaseDate;
        this.language = language;
    }

    public CreateBookDto() {}

    public BooksEntity toEntity() {
        BooksEntity entity = new BooksEntity();
        entity.setTitle(this.title);
        entity.setAuthor(this.author);
        entity.setCategory(this.category);
        entity.setIsbn(this.isbn);
        entity.setDescription(this.description);
        entity.setReleaseDate(this.releaseDate);
        entity.setLanguage(this.language);
        return entity;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(Date releaseDate) {
        this.releaseDate = releaseDate;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }
}
