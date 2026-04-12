package com.rentcity.api.repository;

import com.rentcity.api.entity.Vehicle;
import com.rentcity.api.constant.VehicleStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, String> {

    // Tìm xe theo trạng thái (Ví dụ: Tìm những xe đang AVAILABLE)
    List<Vehicle> findByStatus(VehicleStatus status);

    // Tìm xe theo thành phố của chi nhánh
    List<Vehicle> findByLocation_City(String city);

    // Tìm xe theo loại xe (Category)
    List<Vehicle> findByCategory_Name(String categoryName);
}