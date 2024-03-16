package com.resort.ResortManagementProject.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.resort.ResortManagementProject.entity.Booking;
import com.resort.ResortManagementProject.service.BookingService;

@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
@RequestMapping("/booking")
public class BookingController {
	@Autowired
	private BookingService bookingService;
	
	@GetMapping("/getAllBooking")
	 public List<Booking> getAllBookings() {
		System.out.println(bookingService.getAllBookings());
		 return bookingService.getAllBookings();
	 }
	
	 
	@GetMapping("/getBooking/{id}")
	public ResponseEntity<Booking> getBookingById(@PathVariable int id) {
	    System.out.println(id);
	    Optional<Booking> bookingOptional = bookingService.getBookingById(id);

	    if (bookingOptional.isPresent()) {
	        Booking booking = bookingOptional.get();
	        return ResponseEntity.ok(booking);
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}

	 @GetMapping("/{userId}")
	    public List<Booking> getBookingsByUserId(@PathVariable int userId) {
	        return bookingService.getBookingsByUserId(userId);
	    }
	 
	@PostMapping("/addBooking")
	public Booking addBooking(@RequestBody Booking newBooking) {
		System.out.println(newBooking);
		return bookingService.addBooking(newBooking);
	}
	
	@DeleteMapping("/deleteBooking/{bookingId}")
	public ResponseEntity<String> deleteBooking(@PathVariable int bookingId){
	    return bookingService.deleteBooking(bookingId);
	}

}
