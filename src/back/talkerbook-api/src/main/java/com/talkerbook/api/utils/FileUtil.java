package com.talkerbook.api.utils;

import com.talkerbook.api.types.FileType;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

public class FileUtil {
    private static final String UPLOADED_FOLDER = "files/";

    public static String saveFile(MultipartFile file, FileType fileType) throws IOException {
        if (file.isEmpty()) {
            throw new IOException("File is empty");
        }

        String fileExtension = getFileExtension(file.getOriginalFilename());
        String uniqueFileName = UUID.randomUUID() + fileExtension;

        byte[] bytes = file.getBytes();
        Path path = Paths.get(UPLOADED_FOLDER + fileType + "/" + uniqueFileName);
        Files.write(path, bytes);

        return path.toString();
    }

    private static String getFileExtension(String fileName) {
        if (fileName == null || fileName.isEmpty()) {
            return "";
        }
        int dotIndex = fileName.lastIndexOf('.');
        return (dotIndex == -1) ? "" : fileName.substring(dotIndex);
    }

    public static void deleteFile(String filePath, FileType fileType) throws IOException {
        Path path = Paths.get(filePath);
        if (Files.exists(path)) {
            Files.delete(path);
        }
    }
}
