package com.resort.ResortManagementProject.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.resort.ResortManagementProject.entity.Image;
import com.resort.ResortManagementProject.service.ImageService;



@RestController
@CrossOrigin(origins= "*")
@RequestMapping("image")
public class ImageController {

	@Autowired
	private ImageService imageSevice;
	
public static String uploadDirectory = "C:\\ResortManagement\\frontend\\resort\\public";
	
	//saving image in database
	@PostMapping("/saveImg")
	public Image saveImage(@ModelAttribute Image image, @RequestParam("image") MultipartFile file) throws IOException {
		String originalFilename = file.getOriginalFilename();
		System.out.println(originalFilename);
		Path fileNameAndPath=Paths.get(uploadDirectory, originalFilename);
		Files.write(fileNameAndPath, file.getBytes());
		image.setImg(originalFilename);
		Image saveImageData= imageSevice.saveImageData(image);
		return saveImageData;
	}
	
	//fetching the all image details
			@GetMapping("/image/AllImageData")
			public List<Image> getAllImageData(){
				List<Image> allImage = imageSevice.getAllImageData();
				return allImage;
			}
	
}