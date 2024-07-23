package com.talkerbook.api.dtos.ratings;

public class CreateRatingDto {
    private int rating;
    private String comment;
    private String bookId;

    public CreateRatingDto(int rating, String comment, String bookId) {
        this.rating = rating;
        this.comment = comment;
        this.bookId = bookId;
    }

    public CreateRatingDto() {}

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getBookId() {
        return bookId;
    }

    public void setBookId(String bookId) {
        this.bookId = bookId;
    }
}
