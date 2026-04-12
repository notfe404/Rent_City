package com.rentcity.api.service;

import com.rentcity.api.entity.Review;
import com.rentcity.api.entity.Vehicle;
import com.rentcity.api.repository.ReviewRepository;
import com.rentcity.api.repository.VehicleRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final VehicleRepository vehicleRepository;

    public ReviewService(ReviewRepository reviewRepository, VehicleRepository vehicleRepository) {
        this.reviewRepository = reviewRepository;
        this.vehicleRepository = vehicleRepository;
    }

    @Transactional
    public Review addReview(String vehicleId, Integer rating, String comment, String customerId) {
        Vehicle vehicle = vehicleRepository.findById(vehicleId)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy xe"));

        Review review = new Review();
        review.setVehicle(vehicle);
        review.setRating(rating);
        review.setComment(comment);
        review.setCustomerId(customerId);
        Review savedReview = reviewRepository.save(review);

        // Tính toán lại avgRating cho xe
        List<Review> allReviews = reviewRepository.findByVehicleId(vehicleId);
        double avg = allReviews.stream().mapToInt(Review::getRating).average().orElse(0.0);

        vehicle.setAvgRating(avg);
        vehicle.setTotalTrips(vehicle.getTotalTrips() + 1); // Tăng số chuyến đi
        vehicleRepository.save(vehicle);

        return savedReview;
    }
}