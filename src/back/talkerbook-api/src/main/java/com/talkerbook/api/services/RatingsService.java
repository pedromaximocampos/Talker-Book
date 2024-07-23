package com.talkerbook.api.services;

import com.talkerbook.api.dtos.ratings.CreateRatingDto;
import com.talkerbook.api.entities.BooksEntity;
import com.talkerbook.api.entities.RatingsEntity;
import com.talkerbook.api.entities.UserEntity;
import com.talkerbook.api.repositories.BookRepository;
import com.talkerbook.api.repositories.RatingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class RatingsService {
    @Autowired
    private RatingsRepository ratingsRepository;

    @Autowired
    private BookRepository bookRepository;

    public RatingsEntity createRating(CreateRatingDto ratingDto, UserEntity user) throws Exception {
        try {
            UUID bookId;
            try {
                bookId = UUID.fromString(ratingDto.getBookId());
            } catch (IllegalArgumentException e) {
                throw new Exception("Invalid book ID format.");
            }

            Optional<BooksEntity> bookOptional = bookRepository.findById(bookId);
            if (bookOptional.isPresent()) {
                BooksEntity book = bookOptional.get();

                RatingsEntity rating = new RatingsEntity();
                rating.setRating(ratingDto.getRating());
                rating.setComment(ratingDto.getComment());
                rating.setBook(book);
                rating.setUser(user);

                return ratingsRepository.save(rating);
            } else {
                throw new Exception("Book not found.");
            }
        } catch (Exception e) {
            throw new Exception("Unexpected error occurred while creating the rating.", e);
        }
    }

    public void deleteRating(String ratingId, UserEntity user) throws Exception {
        try {
            UUID id;
            try {
                id = UUID.fromString(ratingId);
            } catch (IllegalArgumentException e) {
                throw new Exception("Invalid book ID format.");
            }

            Optional<RatingsEntity> ratingOptional = ratingsRepository.findById(id);
            if (ratingOptional.isPresent()) {
                RatingsEntity rating = ratingOptional.get();
                if (rating.getUser().getUserId().equals(user.getUserId())) {
                    ratingsRepository.delete(rating);
                } else {
                    throw new Exception("You do not have permission to delete this rating.");
                }
            } else {
                throw new Exception("Rating not found.");
            }
        } catch (Exception e) {
            throw new Exception("Unexpected error occurred while deleting the rating.", e);
        }
    }
}
