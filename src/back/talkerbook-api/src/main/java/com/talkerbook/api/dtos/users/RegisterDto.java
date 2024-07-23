package com.talkerbook.api.dtos.users;

import com.talkerbook.api.entities.UserEntity;

public class RegisterDto {
    private String name;
    private String email;
    private String cpf;
    private String password;

    public RegisterDto(String name, String email, String cpf, String password) {
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.password = password;
    }

    public RegisterDto() { }

    public UserEntity toEntity() {
        UserEntity entity = new UserEntity();
        entity.setName(this.name);
        entity.setEmail(this.email);
        entity.setCpf(this.cpf);
        entity.setPassword(this.password);

        return entity;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
