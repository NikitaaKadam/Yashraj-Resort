package com.resort.ResortManagementProject.service;

import java.util.List;
import java.util.Optional;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.resort.ResortManagementProject.entity.User;
import com.resort.ResortManagementProject.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepo;


	public List<User> getUsersByRole(String role) {
		return userRepo.findByuserRole(role);
	}

	 public ResponseEntity<String> registerUser(User newUser) {
	        
	        User UserByEmail = userRepo.findByemail(newUser.getEmail());
	        User UserByPhNo = userRepo.findByphNo(newUser.getPhNo());

	        if (UserByEmail != null ||UserByPhNo != null) {
	            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
	                    .body("User already exists with this email :" + newUser.getEmail());
	        } else {
	            userRepo.save(newUser);
	            return ResponseEntity.status(HttpStatus.OK).body("User registered successfully");
	        }
	    }

	public ResponseEntity<String> loginUser(User loginUser) {
	    List<User> users = userRepo.findAll();
	    for (User user : users) {
	        if ((user.getEmail().equals(loginUser.getEmail()) || user.getPhNo().equals(loginUser.getPhNo()))
	                && user.getPassword().equals(loginUser.getPassword())) {
	            return ResponseEntity.status(HttpStatus.OK).body(user.getUserRole()+"-"+user.getUserId());
	        }
	    }
	    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("INVALID USERNAME OR PASSWORD");
	}
	
	public ResponseEntity<String> deleteUserById(int id){
		Optional<User> user= userRepo.findById(id);
		if(user.isPresent()) {
			userRepo.deleteById(id);
		return ResponseEntity.status(HttpStatus.OK).body("USER DELETED SUCCESSFULLY");
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("USER NOT FOUND WITH THIS ID");
	}
	
	public User updateUser(User newUser) {
		return userRepo.save(newUser);
	}
	
	public Optional<User> getUserById(int id) {
		return userRepo.findById(id);
	}
	
}
