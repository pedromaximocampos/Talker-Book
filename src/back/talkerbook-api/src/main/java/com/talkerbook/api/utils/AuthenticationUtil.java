package com.talkerbook.api.utils;

import com.talkerbook.api.entities.UserEntity;
import com.talkerbook.api.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.util.UUID;

@Component
public class AuthenticationUtil {
    private static UserService userService;

    @Autowired
    public AuthenticationUtil(UserService userService) {
        AuthenticationUtil.userService = userService;
    }

    /**
     * Extrai e retorna o usuário a partir do token JWT na requisição.
     *
     * @param request a requisição HTTP que contém o cabeçalho de autorização.
     * @return a entidade do usuário correspondente ao UUID extraído do token.
     */
    public static String extractUserIdFromJwt(HttpServletRequest request) {
        String jwtToken = request.getHeader("Authorization").substring(7); // Remove "Bearer " do início
        return JwtUtil.extractUsername(jwtToken);
    }

    public static UserEntity extractUserFromJwt(HttpServletRequest request) throws Exception {
        UUID userUuid = UUID.fromString(extractUserIdFromJwt(request)); // Converte para UUID
        return userService.getUserById(userUuid); // Consulta e retorna o usuário
    }
}
