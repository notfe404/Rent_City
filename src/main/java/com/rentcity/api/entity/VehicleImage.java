package com.rentcity.api.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "vehicle_images")
@Data
public class VehicleImage {
    @Id
    private String id = UUID.randomUUID().toString();

    @ManyToOne
    @JoinColumn(name = "vehicle_id")
    private Vehicle vehicle;

    private String url;
    private Boolean isPrimary = false;
    private Integer displayOrder;
    private LocalDateTime createdAt = LocalDateTime.now();
}