package com.talkerbook.api.controllers;

import com.talkerbook.api.dtos.ratings.CreateRatingDto;
import com.talkerbook.api.entities.RatingsEntity;
import com.talkerbook.api.entities.UserEntity;
import com.talkerbook.api.responses.ApiResponse;
import com.talkerbook.api.services.RatingsService;
import com.talkerbook.api.utils.AuthenticationUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/ratings")
public class RatingsController {
    @Autowired
    private RatingsService ratingsService;

    @PostMapping("/create")
    public ResponseEntity<ApiResponse<RatingsEntity>> createRating(@RequestBody CreateRatingDto rating, HttpServletRequest request) {
        try {
            UserEntity user = AuthenticationUtil.extractUserFromJwt(request);
            RatingsEntity newRating = ratingsService.createRating(rating, user);
            return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse<>(false, "Rating created successfully", List.of(newRating)));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ApiResponse<>(true, e.getMessage(), null));
        }
    }

    @DeleteMapping("/delete/{ratingId}")
    public ResponseEntity<ApiResponse<Void>> deleteRating(@PathVariable String ratingId, HttpServletRequest request) {
        try {
            UserEntity user = AuthenticationUtil.extractUserFromJwt(request);
            ratingsService.deleteRating(ratingId, user);
            return ResponseEntity.ok(new ApiResponse<>(false, "Rating deleted successfully", null));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new ApiResponse<>(true, e.getMessage(), null));
        }
    }
}
