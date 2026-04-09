package com.rentcity.api.entity;

import com.rentcity.api.constant.VehicleStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "vehicles")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Vehicle {
    @Id
    private String id = UUID.randomUUID().toString();

    @ManyToOne
    @JoinColumn(name = "category_id")
    private VehicleCategory category;

    @Column(unique = true)
    private String licensePlate;

    private String brand;
    private String model;
    private Integer year;
    private String color;
    private Integer seats;
    private String fuelType;
    private String transmission;
    private Integer currentOdometer;

    @ManyToOne
    @JoinColumn(name = "location_id")
    private Location location;

    @Enumerated(EnumType.STRING)
    private VehicleStatus status = VehicleStatus.AVAILABLE;

    @Column(columnDefinition = "TEXT")
    private String description;

    private Double avgRating = 0.0;
    private Integer totalTrips = 0;
    private LocalDateTime createdAt = LocalDateTime.now();

    @Version
    private Integer version = 0;
}