package com.rentcity.api.repository;

import com.rentcity.api.entity.CheckInReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface CheckInReportRepository extends JpaRepository<CheckInReport, String> {

    // Tìm báo cáo bàn giao dựa trên ID của đơn đặt xe
    Optional<CheckInReport> findByBookingId(String bookingId);
}