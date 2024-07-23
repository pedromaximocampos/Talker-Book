package com.talkerbook.api.services;

import com.talkerbook.api.dtos.users.RegisterDto;
import com.talkerbook.api.entities.UserEntity;
import com.talkerbook.api.repositories.UserRepository;
import com.talkerbook.api.types.FileType;
import com.talkerbook.api.utils.EncryptionUtil;
import com.talkerbook.api.utils.FileUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;
import java.util.UUID;

@Service
@Transactional
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public UserEntity createUser(RegisterDto userData) throws Exception {
        if (emailExists(userData.getEmail())) {
            throw new Exception("Email já cadastrado");
        }
        if (cpfExists(userData.getCpf())) {
            throw new Exception("CPF já cadastrado");
        }

        try {
            userData.setPassword(EncryptionUtil.encryptPassword(userData.getPassword()));
        } catch (Exception e) {
            throw new Exception("Falha ao criptografar a senha", e);
        }

        try {
            return userRepository.save(userData.toEntity());
        } catch (Exception e) {
            throw new Exception("Erro ao salvar o usuário no banco de dados", e);
        }
    }

    public UserEntity validateLogin(String email, String password) throws Exception {
        Optional<UserEntity> userOptional;
        try {
            userOptional = userRepository.findByEmail(email);
        } catch (Exception e) {
            throw new Exception("Erro ao buscar usuário por email", e);
        }

        if (userOptional.isEmpty()) {
            throw new Exception("Email não cadastrado.");
        }

        UserEntity user = userOptional.get();

        if (!EncryptionUtil.checkPassword(password, user.getPassword())) {
            throw new Exception("Senha incorreta.");
        }

        return user;
    }

    public UserEntity getUserById(UUID userId) throws Exception {
        Optional<UserEntity> userOptional;
        try {
            userOptional = userRepository.findById(userId);
        } catch (Exception e) {
            throw new Exception("Erro ao buscar usuário por id", e);
        }

        if (userOptional.isPresent()) {
            return userOptional.get();
        } else {
            throw new Exception("Usuário não encontrado");
        }
    }

    public UserEntity getUserByEmail(String email) throws Exception {
        Optional<UserEntity> userOptional;
        try {
            userOptional = userRepository.findByEmail(email);
        } catch (Exception e) {
            throw new Exception("Erro ao buscar usuário por email", e);
        }

        if (userOptional.isPresent()) {
            return userOptional.get();
        } else {
            throw new Exception("Usuário não encontrado");
        }
    }

    public Page<UserEntity> findUsersByName(String name, int page, int size) throws Exception {
        try {
            Pageable pageable = PageRequest.of(page, size);
            return userRepository.findByNameContaining(name, pageable);
        } catch (Exception e) {
            throw new Exception("Erro ao buscar usuários por nome", e);
        }
    }

    public void updateUserPhotoLink(UUID userId, MultipartFile file) throws Exception {
        try {
            UserEntity user = getUserById(userId);
            if (user.getPhotoLink() != null && !user.getPhotoLink().isEmpty()) {
                FileUtil.deleteFile(user.getPhotoLink(), FileType.USER_PROFILE);
            }
            String photoLink = FileUtil.saveFile(file, FileType.USER_PROFILE);
            user.setPhotoLink(photoLink);
            userRepository.save(user);
        } catch (Exception e) {
            throw new Exception("Erro ao atualizar a foto do usuário", e);
        }
    }

    public void deleteUser(UUID targetUserId, UUID requestingUserId) throws Exception {
        try {
            UserEntity targetUser = getUserById(targetUserId);
            UserEntity requestingUser = getUserById(requestingUserId);

            if (!requestingUser.isAdmin() && !targetUserId.equals(requestingUserId)) {
                throw new Exception("Você não tem permissão para deletar este usuário");
            }

            userRepository.delete(targetUser);
        } catch (Exception e) {
            throw new Exception("Erro ao deletar o usuário", e);
        }
    }

    private boolean emailExists(String email) throws Exception {
        try {
            return userRepository.findByEmail(email).isPresent();
        } catch (Exception e)  {
            throw new Exception("Erro ao verificar se o email já existe", e);
        }
    }

    private boolean cpfExists(String cpf) throws Exception {
        try {
            return userRepository.findByCpf(cpf).isPresent();
        } catch (Exception e) {
            throw new Exception("Erro ao verificar se o cpf já existe", e);
        }
    }
}
