package com.talkerbook.api.dtos.reports;

public class CreateReportDto {
    private String isbn;
    private String reason;

    public CreateReportDto(String isbn, String reason) {
        this.isbn = isbn;
        this.reason = reason;
    }

    public CreateReportDto() {}

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }
}
