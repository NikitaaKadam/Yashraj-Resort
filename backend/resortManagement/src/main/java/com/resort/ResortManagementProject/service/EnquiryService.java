package com.resort.ResortManagementProject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.resort.ResortManagementProject.entity.Enquiry;
import com.resort.ResortManagementProject.repository.EnquiryRepository;


@Service
public class EnquiryService {
	@Autowired
	private EnquiryRepository enquiryRepository;
	
	public Enquiry addEnquiry(Enquiry enquiry) {
		
		return enquiryRepository.save(enquiry);
	}


	public List<Enquiry> getEnquiry() {
		return enquiryRepository.findAll();
	}
	
}