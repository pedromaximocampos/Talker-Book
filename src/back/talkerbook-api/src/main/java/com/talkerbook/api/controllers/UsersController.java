package com.talkerbook.api.controllers;

import com.talkerbook.api.dtos.users.LoginDto;
import com.talkerbook.api.dtos.users.RegisterDto;
import com.talkerbook.api.dtos.users.UserDto;
import com.talkerbook.api.entities.UserEntity;
import com.talkerbook.api.responses.ApiResponse;
import com.talkerbook.api.services.UserService;
import com.talkerbook.api.utils.AuthenticationUtil;
import com.talkerbook.api.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.util.Collections;
import java.util.UUID;

@RestController
@RequestMapping("/users")
public class UsersController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<ApiResponse<UserDto>> createUser(@RequestBody RegisterDto user) {
        try {
            UserEntity createdUser = userService.createUser(user);
            UserDto userDto = UserDto.fromUserEntity(createdUser);
            ApiResponse<UserDto> response = new ApiResponse<>(false, "Usuário cadastrado com sucesso", Collections.singletonList(userDto));
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ApiResponse<>(true, e.getMessage(), null));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<String>> login(@RequestBody LoginDto loginRequest) {
        try {
            UserEntity user = userService.validateLogin(loginRequest.getEmail(), loginRequest.getPassword());
            if (user != null) {
                String token = JwtUtil.generateToken(user.getUserId().toString());
                ApiResponse<String> response = new ApiResponse<>(false, "Login realizado com sucesso", Collections.singletonList(token));
                return ResponseEntity.ok(response);
            } else {
                ApiResponse<String> response = new ApiResponse<>(true, "Senha incorreta", null);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
            }
        } catch (Exception e) {
            ApiResponse<String> response = new ApiResponse<>(true, e.getMessage(), null);
            return ResponseEntity.badRequest().body(response);
        }
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<ApiResponse<UserDto>> getUserByEmail(@PathVariable String email) {
        try {
            UserEntity userEntity = userService.getUserByEmail(email);
            UserDto user = UserDto.fromUserEntity(userEntity);
            ApiResponse<UserDto> response = new ApiResponse<>(false, "Usuário encontrado com sucesso", Collections.singletonList(user));
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse<>(true, e.getMessage(), null));
        }
    }

    @GetMapping("/search")
    public ResponseEntity<ApiResponse<Page<UserDto>>> searchUsersByName(
            @RequestParam String name,
            @RequestParam int page,
            @RequestParam int size
    ) {
        try {
            Page<UserEntity> usersPage = userService.findUsersByName(name, page, size);
            Page<UserDto> users = usersPage.map(UserDto::fromUserEntity);
            ApiResponse<Page<UserDto>> response = new ApiResponse<>(false, "Usuários encontrados", Collections.singletonList(users));
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse<>(true, e.getMessage(), null));
        }
    }

    @PostMapping("/uploadPhoto")
    public ResponseEntity<ApiResponse<String>> uploadUserPhoto(@RequestParam("file") MultipartFile file, HttpServletRequest request) {
        try {
            UserEntity user = AuthenticationUtil.extractUserFromJwt(request);
            userService.updateUserPhotoLink(user.getUserId(), file);
            ApiResponse<String> response = new ApiResponse<>(false, "Successfully uploaded - " + file.getOriginalFilename(), null);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            ApiResponse<String> response = new ApiResponse<>(true, "Failed to update user photo link: " + e.getMessage(), null);
            return ResponseEntity.status(500).body(response);
        }
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<ApiResponse<String>> deleteUser(@PathVariable String userId, HttpServletRequest request) {
        try {
            UserEntity requestingUser = AuthenticationUtil.extractUserFromJwt(request);
            UUID targetUserUuid = UUID.fromString(userId);
            userService.deleteUser(targetUserUuid, requestingUser.getUserId());
            ApiResponse<String> response = new ApiResponse<>(false, "Usuário deletado com sucesso", null);
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            ApiResponse<String> response = new ApiResponse<>(true, "ID de usuário inválido: " + e.getMessage(), null);
            return ResponseEntity.status(400).body(response);
        } catch (Exception e) {
            ApiResponse<String> response = new ApiResponse<>(true, "Erro ao deletar o usuário: " + e.getMessage(), null);
            return ResponseEntity.status(500).body(response);
        }
    }
}
