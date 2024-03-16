package com.resort.ResortManagementProject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.resort.ResortManagementProject.entity.Room;

public interface RoomRepository extends JpaRepository<Room,Integer> {
	@Query("SELECT r FROM Room r WHERE r.capacity >= :capacity AND r.availability = :availability")
    List<Room> findByCapacityGreaterThanEqualAndAvailability(@Param("capacity") int capacity, @Param("availability") String availability);

	List<Room> findByAvailabilityAndCapacityGreaterThanEqual(String string, int capacity);
}


