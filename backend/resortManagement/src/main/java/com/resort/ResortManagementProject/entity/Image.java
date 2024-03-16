package com.resort.ResortManagementProject.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Image {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="img_id")
	private int imgId;
	private String img;
	private String description;
	
	public Image() {
		// TODO Auto-generated constructor stub
	}

	public Image(int imgId, String img, String description) {
		super();
		this.imgId = imgId;
		this.img = img;
		this.description = description;
	}

	public int getImgId() {
		return imgId;
	}

	public void setImgId(int imgId) {
		this.imgId = imgId;
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

	@Override
	public String toString() {
		return "Image [imgId=" + imgId + ", img=" + img + ", description=" + description + "]";
	}
}
