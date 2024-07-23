package com.talkerbook.api.entities;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "reports")
public class ReportsEntity {
    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "report_id", updatable = false, nullable = false)
    @Type(type = "uuid-char")
    private UUID reportId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "book_id", nullable = false)
    private BooksEntity book;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;

    @Column(name= "reason", nullable = false)
    @Lob
    private String reason;

    @Column(name = "resolved", nullable = false)
    private boolean resolved;

    @Column(name = "resolution_date")
    private LocalDateTime resolution_date;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    public ReportsEntity() {}

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        resolution_date = LocalDateTime.now();
    }

    public UUID getReportId() {
        return reportId;
    }

    public void setReportId(UUID report_id) {
        this.reportId = report_id;
    }

    public BooksEntity getBook() {
        return book;
    }

    public void setBook(BooksEntity book) {
        this.book = book;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public boolean isResolved() {
        return resolved;
    }

    public void setResolved(boolean resolved) {
        this.resolved = resolved;
    }

    public LocalDateTime getResolution_date() {
        return resolution_date;
    }

    public void setResolution_date(LocalDateTime resolution_date) {
        this.resolution_date = resolution_date;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}



