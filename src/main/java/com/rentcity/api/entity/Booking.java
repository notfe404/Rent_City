package com.rentcity.api.entity;

import com.rentcity.api.constant.BookingStatus;
import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "bookings")
@Data
public class Booking {
    @Id
    private String id = UUID.randomUUID().toString();

    @Column(unique = true)
    private String bookingCode; // Mã đặt xe: RC-2024...

    private String customerId;

    @ManyToOne
    @JoinColumn(name = "vehicle_id")
    private Vehicle vehicle;

    @ManyToOne
    @JoinColumn(name = "pickup_location_id")
    private Location pickupLocation;

    @ManyToOne
    @JoinColumn(name = "return_location_id")
    private Location returnLocation;

    private LocalDateTime startDatetime;
    private LocalDateTime endDatetime;
    private LocalDateTime actualReturnAt;

    private Integer totalDays;

    @Column(precision = 14)
    private BigDecimal baseAmount;    // Tiền thuê gốc
    @Column(precision = 14)
    private BigDecimal totalAmount;   // Tổng phải trả
    @Column(precision = 14)
    private BigDecimal depositAmount; // Tiền cọc

    @Enumerated(EnumType.STRING)
    private BookingStatus status = BookingStatus.CONFIRMED;

    @Version
    private Integer version = 0; // Optimistic Locking như tài liệu yêu cầu

    private LocalDateTime createdAt = LocalDateTime.now();
}