package com.rentcity.api.service;

import com.rentcity.api.entity.Vehicle;
import com.rentcity.api.repository.VehicleRepository;
import com.rentcity.api.constant.VehicleStatus;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class VehicleService {

    private final VehicleRepository vehicleRepository;

    public VehicleService(VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }

    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    // Lọc xe đang rảnh
    public List<Vehicle> getAvailableVehicles() {
        return vehicleRepository.findByStatus(VehicleStatus.AVAILABLE);
    }

    // Lọc xe theo thành phố
    public List<Vehicle> getVehiclesByCity(String city) {
        return vehicleRepository.findByLocation_City(city);
    }
}