package com.talkerbook.api.dtos.users;

import com.talkerbook.api.entities.UserEntity;

public class UserDto {
    private String userId;
    private String name;
    private String email;
    private String cpf;
    private boolean isAdmin;
    private String photoLink;

    public UserDto(String userId, String name, String email, String cpf, boolean isAdmin, String photoLink) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.isAdmin = isAdmin;
        this.photoLink = photoLink;
    }

    public UserDto() {}

    public static UserDto fromUserEntity(UserEntity user) {
        return new UserDto(
                user.getUserId().toString(),
                user.getName(),
                user.getEmail(),
                user.getCpf(),
                user.isAdmin(),
                user.getPhotoLink()
        );
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean admin) {
        isAdmin = admin;
    }

    public String getPhotoLink() {
        return photoLink;
    }

    public void setPhotoLink(String photoLink) {
        this.photoLink = photoLink;
    }
}
