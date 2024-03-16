package com.resort.ResortManagementProject.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Facilities {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int facilityId;
	private String facilityName;
	private String img;
	private String description;
	private String availability;
	
	public Facilities() {
		// TODO Auto-generated constructor stub
	}

	public Facilities(int facilityId, String facilityName, String img, String description, String availability) {
		super();
		this.facilityId = facilityId;
		this.facilityName = facilityName;
		this.img = img;
		this.description = description;
		this.availability = availability;
	}

	public int getFacilityId() {
		return facilityId;
	}

	public void setFacilityId(int facilityId) {
		this.facilityId = facilityId;
	}

	public String getFacilityName() {
		return facilityName;
	}

	public void setFacilityName(String facilityName) {
		this.facilityName = facilityName;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getAvailability() {
		return availability;
	}

	public void setAvailability(String availability) {
		this.availability = availability;
	}

	@Override
	public String toString() {
		return "Facilities [facilityId=" + facilityId + ", facilityName=" + facilityName + ", img=" + img
				+ ", description=" + description + ", availability=" + availability + "]";
	}
	
	
	
}
