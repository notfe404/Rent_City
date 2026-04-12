package com.rentcity.api.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "check_in_reports")
public class CheckInReport {
    @Id
    private String id = UUID.randomUUID().toString();

    @OneToOne
    @JoinColumn(name = "booking_id")
    private Booking booking;

    private Integer fuelLevel; // Mức xăng (ví dụ: 80%)
    private Integer odometerReading; // Số km trên đồng hồ lúc giao xe

    @Column(columnDefinition = "TEXT")
    private String vehicleCondition; // Mô tả tình trạng (ví dụ: Xước nhẹ cửa lái)

    private String staffId; // Mã nhân viên bàn giao
    private LocalDateTime checkInTime = LocalDateTime.now();

    // Getter và Setter viết tay
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public Booking getBooking() { return booking; }
    public void setBooking(Booking booking) { this.booking = booking; }
    public Integer getFuelLevel() { return fuelLevel; }
    public void setFuelLevel(Integer fuelLevel) { this.fuelLevel = fuelLevel; }
    public Integer getOdometerReading() { return odometerReading; }
    public void setOdometerReading(Integer odometerReading) { this.odometerReading = odometerReading; }
    public String getVehicleCondition() { return vehicleCondition; }
    public void setVehicleCondition(String vehicleCondition) { this.vehicleCondition = vehicleCondition; }
    public String getStaffId() { return staffId; }
    public void setStaffId(String staffId) { this.staffId = staffId; }
    public LocalDateTime getCheckInTime() { return checkInTime; }
    public void setCheckInTime(LocalDateTime checkInTime) { this.checkInTime = checkInTime; }
}