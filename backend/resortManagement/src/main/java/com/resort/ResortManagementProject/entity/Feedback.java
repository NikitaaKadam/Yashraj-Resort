package com.resort.ResortManagementProject.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Feedback {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="feedback_id")
	private int feedbackId;
	
	@ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    
    @ManyToOne
    @JoinColumn(name = "booking_id")
    private Booking booking;
    
	private String rating;
	private String comments;
	private LocalDate date;
	
	public Feedback() {
		// TODO Auto-generated constructor stub
	}
	
	

	public Feedback(int feedbackId, User user, Booking booking, String rating, String comments, LocalDate date) {
		super();
		this.feedbackId = feedbackId;
		this.user = user;
		this.booking = booking;
		this.rating = rating;
		this.comments = comments;
		this.date = date;
	}

	public int getFeedbackId() {
		return feedbackId;
	}

	public void setFeedbackId(int feedbackId) {
		this.feedbackId = feedbackId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Booking getBooking() {
		return booking;
	}

	public void setBooking(Booking booking) {
		this.booking = booking;
	}

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "Feedback [feedbackId=" + feedbackId + ", user=" + user + ", booking=" + booking + ", rating=" + rating
				+ ", comments=" + comments + ", date=" + date + "]";
	}
	
	
}