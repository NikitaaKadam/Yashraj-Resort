package com.resort.ResortManagementProject.entity;

import java.util.Arrays;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Room {
	@Id
	@Column(name="room_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int roomId;
	private String roomType;
	private int capacity;
	@Column(name="price")
	private double pricePerNight;
	private String availability;
	@Column(name="room_img")
    private String roomImage;
	
	public Room() {
		// TODO Auto-generated constructor stub
	}
	public Room(int roomId) {
		this.roomId = roomId;
	}
	public Room(int roomId, String roomType, int capacity, double pricePerNight, String availability,
			String roomImage) {
		super();
		this.roomId = roomId;
		this.roomType = roomType;
		this.capacity = capacity;
		this.pricePerNight = pricePerNight;
		this.availability = availability;
		this.roomImage = roomImage;
	}

	public int getRoomId() {
		return roomId;
	}

	public void setRoomId(int roomId) {
		this.roomId = roomId;
	}

	public String getRoomType() {
		return roomType;
	}

	public void setRoomType(String roomType) {
		this.roomType = roomType;
	}

	public int getCapacity() {
		return capacity;
	}

	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

	public double getPricePerNight() {
		return pricePerNight;
	}

	public void setPricePerNight(double pricePerNight) {
		this.pricePerNight = pricePerNight;
	}

	public String getAvailability() {
		return availability;
	}

	public void setAvailability(String availability) {
		this.availability = availability;
	}

	public String getRoomImage() {
		return roomImage;
	}

	public void setRoomImage(String roomImage) {
		this.roomImage = roomImage;
	}

	@Override
	public String toString() {
		return "Room [roomId=" + roomId + ", roomType=" + roomType + ", capacity=" + capacity + ", pricePerNight="
				+ pricePerNight + ", availability=" + availability + ", roomImage=" + roomImage + "]";
	}

	
	
	
	
}