package com.rentcity.api.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;
import java.util.UUID;

@Entity
@Table(name = "vehicle_categories")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class VehicleCategory {
    @Id
    private String id = UUID.randomUUID().toString();

    @Column(unique = true, nullable = false)
    private String name;

    private String description;

    @Column(name = "base_price_day", precision = 12, scale = 0)
    private BigDecimal basePriceDay;

    @Column(name = "base_price_hour", precision = 12, scale = 0)
    private BigDecimal basePriceHour;

    private Double depositRate;
    private Boolean isActive = true;
}