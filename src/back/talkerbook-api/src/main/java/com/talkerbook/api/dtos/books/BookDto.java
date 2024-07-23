package com.talkerbook.api.dtos.books;

import com.talkerbook.api.entities.BooksEntity;

public class BookDto {
    private String bookId;
    private String isbn;
    private String title;
    private String author;
    private String category;
    private String language;
    private String releaseDate;
    private String postDate;
    private String cover_image_link;
    private String pdf_link;
    private String userId;
    private String userName;

    public BookDto(String bookId, String isbn, String title, String author, String category, String language, String releaseDate, String postDate, String cover_image_link, String pdf_link, String userId, String userName) {
        this.bookId = bookId;
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.category = category;
        this.language = language;
        this.releaseDate = releaseDate;
        this.postDate = postDate;
        this.cover_image_link = cover_image_link;
        this.pdf_link = pdf_link;
        this.userId = userId;
        this.userName = userName;
    }

    public static BookDto fromBooksEntity(BooksEntity book) {
        return new BookDto(
                book.getBookId().toString(),
                book.getIsbn(),
                book.getTitle(),
                book.getAuthor(),
                book.getCategory(),
                book.getLanguage(),
                book.getReleaseDate().toString(),
                book.getCreatedAt().toString(),
                book.getCoverImageLink(),
                book.getPdfLink(),
                book.getUser().getUserId().toString(),
                book.getUser().getName()
        );
    }

    public BookDto() {}

    public String getBookId() {
        return bookId;
    }

    public void setBookId(String bookId) {
        this.bookId = bookId;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
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

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }

    public String getPostDate() {
        return postDate;
    }

    public void setPostDate(String postDate) {
        this.postDate = postDate;
    }

    public String getCover_image_link() {
        return cover_image_link;
    }

    public void setCover_image_link(String cover_image_link) {
        this.cover_image_link = cover_image_link;
    }

    public String getPdf_link() { return pdf_link; }

    public void setPdf_link(String pdf_link) { this.pdf_link = pdf_link; }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
