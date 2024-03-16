package com.resort.ResortManagementProject.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.resort.ResortManagementProject.entity.Image;
import com.resort.ResortManagementProject.repository.ImageRepository;

@Service
public class ImageService {
	@Autowired
	private ImageRepository imageRepository;

	
	public Image saveImageData(Image image) {
		Image saveImage= imageRepository.save(image);
		return saveImage;
	}
	
	public List<Image> getAllImageData(){
		List<Image> image= imageRepository.findAll();
		return image;
	}

}
