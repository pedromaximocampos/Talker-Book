package com.talkerbook.api.utils;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class EncryptionUtil {
    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public static String encryptPassword(String password) {
        return encoder.encode(password);
    }

    public static boolean checkPassword(String password, String encodedPassword) {
        return encoder.matches(password, encodedPassword);
    }
}
