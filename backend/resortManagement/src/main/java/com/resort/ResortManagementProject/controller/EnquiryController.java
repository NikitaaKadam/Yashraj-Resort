package com.resort.ResortManagementProject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.resort.ResortManagementProject.entity.Enquiry;
import com.resort.ResortManagementProject.service.EnquiryService;


@RestController
@RequestMapping("enquiry")
@CrossOrigin(origins =  "*")
public class EnquiryController {
	@Autowired
	private EnquiryService enquiryService;
	
	@PostMapping("/addEnquiry")
	public Enquiry registerUser(@RequestBody Enquiry enquiry) {
		
		return enquiryService.addEnquiry(enquiry);
	}
	
	
	//  http://localhost:8090/user/getUsers
	@GetMapping("/getEnquiry")
	public List<Enquiry> fetchUsers()
	{
		return enquiryService.getEnquiry();
	}

}