package com.resort.ResortManagementProject.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.resort.ResortManagementProject.entity.Booking;


@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer> {
	 List<Booking> findByCheckInDateBetweenAndCheckOutDateBetween(LocalDate checkInDate1, LocalDate checkInDate2, LocalDate checkOutDate1, LocalDate checkOutDate2);

	 List<Booking> findByCheckInDateLessThanAndCheckOutDateGreaterThanEqual(LocalDate endDate, LocalDate startDate);
	 public List<Booking> findByUserUserId(int userId);
}
