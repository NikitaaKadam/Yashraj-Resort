package com.resort.ResortManagementProject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
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
import com.resort.ResortManagementProject.entity.Feedback;
import com.resort.ResortManagementProject.service.FeedbackService;

@RestController
@CrossOrigin(origins= "*")
@RequestMapping("/feedback")
public class FeedbackController {
	
	@Autowired
	private FeedbackService feedbackService;
	
	@PostMapping("/addFeedback")
	public Feedback addFeedback(@RequestBody Feedback feedback) {
		System.out.println(feedback);
		System.out.println(feedback.getBooking().getBookingId());
        Feedback addedFeedback = feedbackService.addFeedback(feedback);
        return addedFeedback;
    }
	

	
	@GetMapping("/getFeedback/{id}")
	public ResponseEntity<Feedback> getFeedbackById(@PathVariable int id){
		Feedback feedback = feedbackService.getFeedbackById(id);
		return ResponseEntity.ok().body(feedback);
	}
	
		@GetMapping("/AllFeedbackData")
		public List<Feedback> getAllFeedback(){
			return feedbackService.getAllFeedback();
		}
		
		@DeleteMapping("/deleteFeedback/{id}")
		public ResponseEntity<String> deleteFeedback(@PathVariable("id") int id){
			try {
				feedbackService.deleteFeedback(id);
				return ResponseEntity.ok().body("Feedback deleted successfully.");
			}catch(Exception e) {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting feedback.");
			}
		}
}