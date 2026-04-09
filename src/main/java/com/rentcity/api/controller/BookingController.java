package com.rentcity.api.controller;

import com.rentcity.api.entity.Booking;
import com.rentcity.api.dto.BookingRequest;
import com.rentcity.api.service.BookingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    private final BookingService bookingService;

    // Constructor viết tay
    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    // API xem danh sách đơn hàng
    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }

    // API tạo đơn hàng mới
    @PostMapping
    public Booking createNewBooking(@RequestBody BookingRequest request) {
        return bookingService.createBooking(request);
    }
}