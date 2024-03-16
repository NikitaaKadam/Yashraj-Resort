package com.resort.ResortManagementProject.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.resort.ResortManagementProject.entity.Feedback;
import com.resort.ResortManagementProject.repository.BookingRepository;
import com.resort.ResortManagementProject.repository.FeedbackRepository;

@Service
public class FeedbackService {
	
	@Autowired
	private FeedbackRepository feedbackRepo;
	
	@Autowired
	private BookingRepository bookingrepo;
	
	public Feedback addFeedback(Feedback feedback) {
        return feedbackRepo.save(feedback);
    }
	
	public Feedback getFeedbackById(int id) {
		Optional<Feedback> findById = feedbackRepo.findById(id);
		Feedback feedback = findById.get();
		return feedback;
	}
	
	  public List<Feedback> getAllFeedback() {
	        return feedbackRepo.findAll();
	    }
	
	public String deleteFeedback(int id) {
		feedbackRepo.deleteById(id);
		return "feedback deleted successfully";
    }
	
	
}

