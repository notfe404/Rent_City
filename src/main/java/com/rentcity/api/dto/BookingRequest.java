package com.rentcity.api.dto;

import java.time.LocalDateTime;

public class BookingRequest {
    private String vehicleId;
    private String customerId;
    private LocalDateTime startDatetime;
    private LocalDateTime endDatetime;

    // Getter & Setter viết tay chống lỗi
    public String getVehicleId() { return vehicleId; }
    public void setVehicleId(String vehicleId) { this.vehicleId = vehicleId; }
    public String getCustomerId() { return customerId; }
    public void setCustomerId(String customerId) { this.customerId = customerId; }
    public LocalDateTime getStartDatetime() { return startDatetime; }
    public void setStartDatetime(LocalDateTime startDatetime) { this.startDatetime = startDatetime; }
    public LocalDateTime getEndDatetime() { return endDatetime; }
    public void setEndDatetime(LocalDateTime endDatetime) { this.endDatetime = endDatetime; }
}