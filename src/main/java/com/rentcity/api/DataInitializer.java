package com.rentcity.api;

import com.rentcity.api.entity.*;
import com.rentcity.api.repository.*;
import com.rentcity.api.constant.VehicleStatus;
import com.rentcity.api.constant.BookingStatus;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Component
public class DataInitializer implements CommandLineRunner {

    // 1. Khai báo tất cả các Repository (Phải khai báo ở đây thì Constructor bên dưới mới hết đỏ)
    private final VehicleCategoryRepository categoryRepository;
    private final LocationRepository locationRepository;
    private final VehicleRepository vehicleRepository;
    private final BookingRepository bookingRepository;
    private final ReviewRepository reviewRepository;
    private final CheckInReportRepository checkInReportRepository;

    // 2. Constructor để Spring Boot nạp các Repository vào
    public DataInitializer(VehicleCategoryRepository categoryRepository,
                           LocationRepository locationRepository,
                           VehicleRepository vehicleRepository,
                           BookingRepository bookingRepository,
                           ReviewRepository reviewRepository,
                           CheckInReportRepository checkInReportRepository) {
        this.categoryRepository = categoryRepository;
        this.locationRepository = locationRepository;
        this.vehicleRepository = vehicleRepository;
        this.bookingRepository = bookingRepository;
        this.reviewRepository = reviewRepository;
        this.checkInReportRepository = checkInReportRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        // Chỉ khởi tạo dữ liệu mẫu nếu Database đang trống
        if (categoryRepository.count() == 0) {

            // Tạo Loại xe mẫu
            VehicleCategory sedan = new VehicleCategory();
            sedan.setName("Sedan");
            sedan.setBasePriceDay(new BigDecimal("500000"));
            sedan.setBasePriceHour(new BigDecimal("70000"));
            sedan.setDepositRate(0.3);
            categoryRepository.save(sedan);

            // Tạo Địa điểm mẫu
            Location hanoi = new Location();
            hanoi.setName("Chi nhánh Cầu Giấy");
            hanoi.setAddress("Số 10 Duy Tân");
            hanoi.setCity("Hà Nội");
            locationRepository.save(hanoi);

            // Tạo Xe mẫu
            Vehicle car = new Vehicle();
            car.setBrand("Honda");
            car.setModel("City 2024");
            car.setLicensePlate("30K-123.45");
            car.setCategory(sedan);
            car.setLocation(hanoi);
            car.setSeats(5);
            car.setFuelType("Gasoline");
            car.setTransmission("Automatic");
            car.setStatus(VehicleStatus.AVAILABLE);
            vehicleRepository.save(car);

            // Tạo Đơn hàng mẫu
            Booking booking = new Booking();
            booking.setBookingCode("RC-TEST-001");
            booking.setVehicle(car);
            booking.setCustomerId("USER_01");
            booking.setStartDatetime(LocalDateTime.now().minusDays(1));
            booking.setEndDatetime(LocalDateTime.now().plusDays(1));
            booking.setTotalDays(2);
            booking.setTotalAmount(new BigDecimal("1000000"));
            booking.setStatus(BookingStatus.CONFIRMED);
            bookingRepository.save(booking);

            // Tạo Báo cáo bàn giao mẫu (Check-in Report)
            CheckInReport report = new CheckInReport();
            report.setBooking(booking);
            report.setFuelLevel(100);
            report.setOdometerReading(5000);
            report.setVehicleCondition("Xe mới, không trầy xước");
            report.setStaffId("STAFF_01");
            checkInReportRepository.save(report);

            System.out.println("------------------------------------------");
            System.out.println(">>> [RENTCITY] ĐÃ KHỞI TẠO ĐẦY ĐỦ DỮ LIỆU MẪU!");
            System.out.println("------------------------------------------");
        }
    }
}