package com.talkerbook.api.types;

public enum FileType {
    USER_PROFILE("user/profile"),
    BOOK_COVER_IMAGE("book/image"),
    PDF("book/pdf");

    private final String value;

    FileType(String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return value;
    }
}
