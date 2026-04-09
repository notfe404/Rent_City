package com.rentcity.api.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.util.UUID;

@Entity
@Table(name = "locations")
@Data
public class Location {
    @Id
    private String id = UUID.randomUUID().toString();

    @Column(unique = true)
    private String name;
    private String address;
    private String city;
    private Double latitude;
    private Double longitude;
    private String phone;
    private String openTime;
    private String closeTime;
    private Boolean isActive = true;
}