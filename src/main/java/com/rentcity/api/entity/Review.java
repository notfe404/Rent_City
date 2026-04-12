package com.rentcity.api.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "reviews")
public class Review {
    @Id
    private String id = UUID.randomUUID().toString();

    @ManyToOne
    @JoinColumn(name = "vehicle_id")
    private Vehicle vehicle;

    private String customerId;
    private Integer rating; // 1 đến 5 sao

    @Column(columnDefinition = "TEXT")
    private String comment;

    private LocalDateTime createdAt = LocalDateTime.now();

    // Getter & Setter
    public void setVehicle(Vehicle vehicle) { this.vehicle = vehicle; }
    public void setRating(Integer rating) { this.rating = rating; }
    public void setComment(String comment) { this.comment = comment; }
    public void setCustomerId(String customerId) { this.customerId = customerId; }
    public Integer getRating() { return rating; }
}