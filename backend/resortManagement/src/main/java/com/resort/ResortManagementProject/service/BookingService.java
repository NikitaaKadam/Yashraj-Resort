package com.resort.ResortManagementProject.service;

import java.io.ObjectInputFilter.Status;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.resort.ResortManagementProject.entity.Booking;
import com.resort.ResortManagementProject.repository.BookingRepository;

@Service
public class BookingService {
	@Autowired
	private BookingRepository bookingRepo;
	
	 public Set<Integer> getBookedRoomIds(List<Booking> overlappingBookings) {
	        return overlappingBookings.stream()
	                .map(booking -> booking.getRoom().getRoomId()) // Access roomId via the Room object
	                .collect(Collectors.toSet());
	    }
	 
	 public List<Booking> getAllBookings() {
		 return bookingRepo.findAll();
	 } 
	 
	 public Optional<Booking> getBookingById(int id) {
		 return bookingRepo.findById(id);
	 }
	 public List<Booking> getBookingsByUserId(int userId) {
	        return bookingRepo.findByUserUserId(userId);
	    }
	 public Booking addBooking(Booking newBooking) {
		return  bookingRepo.save(newBooking);
		 
	 }
	 
	 public ResponseEntity<String> deleteBooking(int bookingId){
		 Optional<Booking> booking=bookingRepo.findById(bookingId);
		 if(!booking.isEmpty()) {
			 bookingRepo.deleteById(bookingId);
		 	return ResponseEntity.status(HttpStatus.OK).body("Booking deleted Successfully");
		 }
		 return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("BookingId Not Found");
	 }
}
