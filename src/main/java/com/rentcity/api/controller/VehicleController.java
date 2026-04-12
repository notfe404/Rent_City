package com.rentcity.api.controller;

import com.rentcity.api.entity.Vehicle;
import com.rentcity.api.service.VehicleService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/vehicles")
public class VehicleController {

    private final VehicleService vehicleService;

    public VehicleController(VehicleService vehicleService) {
        this.vehicleService = vehicleService;
    }

    @GetMapping
    public List<Vehicle> getVehicles() {
        return vehicleService.getAllVehicles();
    }

    // API mới: http://localhost:8080/api/vehicles/available
    @GetMapping("/available")
    public List<Vehicle> getAvailable() {
        return vehicleService.getAvailableVehicles();
    }

    // API mới: http://localhost:8080/api/vehicles/search?city=Hà Nội
    @GetMapping("/search")
    public List<Vehicle> searchByCity(@RequestParam String city) {
        return vehicleService.getVehiclesByCity(city);
    }
}