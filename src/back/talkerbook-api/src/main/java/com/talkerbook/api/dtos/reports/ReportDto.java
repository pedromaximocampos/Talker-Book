package com.talkerbook.api.dtos.reports;

import com.talkerbook.api.entities.ReportsEntity;

public class ReportDto {
    private String reportId;
    private String reason;
    private String userId;
    private String userName;
    private String userEmail;
    private String bookId;
    private String bookName;
    private String bookPhoto;

    public ReportDto(String reportId, String reason, String userId, String userName, String userEmail, String bookId, String bookName, String bookPhoto) {
        this.reportId = reportId;
        this.reason = reason;
        this.userId = userId;
        this.userName = userName;
        this.userEmail = userEmail;
        this.bookId = bookId;
        this.bookName = bookName;
        this.bookPhoto = bookPhoto;
    }

    public ReportDto() {}

    public static ReportDto fromReportsEntity(ReportsEntity report) {
        return new ReportDto(
                report.getReportId().toString(),
                report.getReason(),
                report.getUser().getUserId().toString(),
                report.getUser().getName(),
                report.getUser().getEmail(),
                report.getBook().getBookId().toString(),
                report.getBook().getTitle(),
                report.getBook().getCoverImageLink()
        );
    }

    public String getReportId() {
        return reportId;
    }

    public void setReportId(String reportId) {
        this.reportId = reportId;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

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

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getBookId() {
        return bookId;
    }

    public void setBookId(String bookId) {
        this.bookId = bookId;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getBookPhoto() {
        return bookPhoto;
    }

    public void setBookPhoto(String bookPhoto) {
        this.bookPhoto = bookPhoto;
    }
}
