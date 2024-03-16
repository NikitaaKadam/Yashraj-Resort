package com.resort.ResortManagementProject.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.resort.ResortManagementProject.entity.Facilities;
import com.resort.ResortManagementProject.service.FacilitiesService;

@RestController
@CrossOrigin(origins = "*")
public class FacilitiesController {

	@Autowired
	private FacilitiesService facilitiesService;

	public static String uploadDirectory ="C:\\ResortManagement\\frontend\\resort\\public";

	// saving image in database
	@PostMapping("/saveFacilities")
	public Facilities saveRoom(@ModelAttribute Facilities facilities, @RequestParam("image") MultipartFile file)
			throws IOException {
		System.out.println(facilities);
		String originalFilename = file.getOriginalFilename();
		System.out.println(originalFilename);
		Path fileNameAndPath = Paths.get(uploadDirectory, originalFilename);
		Files.write(fileNameAndPath, file.getBytes());
		facilities.setImg(originalFilename);
		Facilities saveFacilities = facilitiesService.saveFacilities(facilities);
		return saveFacilities;
	}

	// fetching the all facilities details
	@GetMapping("/facilities/AllFacilitiesData")
	public List<Facilities> getAllRoomData() {
		List<Facilities> allFacility = facilitiesService.getAllFacilitiesData();
		return allFacility;
	}

	// fetching the data by id
	@GetMapping("/facilities/{id}")
	public ResponseEntity<Facilities> getRoomById(@PathVariable int id) {
		Facilities facilities = facilitiesService.getFacilitiesById(id);
		return ResponseEntity.ok().body(facilities);
	}
	
	//delete the facility by id
			@DeleteMapping("/deleteFacility/{id}")
			public ResponseEntity<String> deleteFacility(@PathVariable("id") int id){
				try {
					facilitiesService.deleteFacility(id);
					return ResponseEntity.ok().body("Facility deleted successfully.");
				}catch(Exception e) {
					return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting feedback.");
				}
			}
			
}