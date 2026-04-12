package com.rentcity.api.service;

import com.rentcity.api.entity.Booking;
import com.rentcity.api.entity.Vehicle;
import com.rentcity.api.repository.BookingRepository;
import com.rentcity.api.repository.VehicleRepository;
import com.rentcity.api.constant.VehicleStatus;
import com.rentcity.api.dto.BookingRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;
    private final VehicleRepository vehicleRepository;

    // Constructor viết tay thay cho Lombok
    public BookingService(BookingRepository bookingRepository, VehicleRepository vehicleRepository) {
        this.bookingRepository = bookingRepository;
        this.vehicleRepository = vehicleRepository;
    }

    // Lấy danh sách tất cả đơn đặt xe
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    // Xử lý logic Đặt xe mới
    @Transactional
    public Booking createBooking(BookingRequest request) {
        // 1. Tìm xe trong Database xem có tồn tại không
        Vehicle vehicle = vehicleRepository.findById(request.getVehicleId())
                .orElseThrow(() -> new RuntimeException("Lỗi: Không tìm thấy xe này trong hệ thống!"));

        // 2. Kiểm tra xe có đang rảnh không
        if (vehicle.getStatus() != VehicleStatus.AVAILABLE) {
            throw new RuntimeException("Rất tiếc! Xe này hiện không sẵn sàng để thuê.");
        }

        // 3. Tính toán số ngày thuê
        long days = Duration.between(request.getStartDatetime(), request.getEndDatetime()).toDays();
        if (days <= 0) days = 1; // Thuê trong ngày vẫn tính là 1 ngày

        // 4. Tính toán tổng tiền (Lấy giá gốc của loại xe nhân với số ngày)
        BigDecimal basePrice = vehicle.getCategory().getBasePriceDay();
        BigDecimal totalAmount = basePrice.multiply(BigDecimal.valueOf(days));

        // 5. Tạo đơn đặt xe mới
        Booking booking = new Booking();
        booking.setBookingCode("RC-" + System.currentTimeMillis()); // Tạo mã đơn ngẫu nhiên
        booking.setVehicle(vehicle);
        booking.setCustomerId(request.getCustomerId());
        booking.setStartDatetime(request.getStartDatetime());
        booking.setEndDatetime(request.getEndDatetime());
        booking.setTotalDays((int) days);
        booking.setTotalAmount(totalAmount);
        // Mặc định cọc 30%
        booking.setDepositAmount(totalAmount.multiply(new BigDecimal("0.3")));

        // 6. Cập nhật trạng thái xe thành Đang thuê (RENTED)
        vehicle.setStatus(VehicleStatus.RENTED);
        vehicleRepository.save(vehicle); // Lưu trạng thái xe

        // 7. Lưu đơn đặt xe vào Database
        return bookingRepository.save(booking);
    }
}