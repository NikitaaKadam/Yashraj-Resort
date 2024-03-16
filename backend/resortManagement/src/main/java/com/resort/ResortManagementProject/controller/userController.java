package com.resort.ResortManagementProject.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.resort.ResortManagementProject.entity.User;
import com.resort.ResortManagementProject.service.UserService;

@RestController
@CrossOrigin(origins = "*")//connect with any platform
@RequestMapping("/user")
public class userController {
	
	@Autowired
	private UserService userService;

	
@GetMapping("/getUsers/{role}")
public List<User> getUsersByRole(@PathVariable String role) {
		return userService.getUsersByRole(role);
	}

@PostMapping("/regUser")
public ResponseEntity<String> registerUser(@RequestBody User newUser) {
	return userService.registerUser(newUser);
}

@PostMapping("/loginUser")
public ResponseEntity<String> loginUser(@RequestBody User logUser){
	System.out.println(logUser);
	return userService.loginUser(logUser);
}

@PutMapping("/updateUser")
public User updateUser(@RequestBody User newUser) {
	System.out.println(newUser);
	Optional<User> oldUser=userService.getUserById(newUser.getUserId());
	if(!oldUser.isEmpty()) {
		User user=oldUser.get();
		user.setFirstName(newUser.getFirstName());
		user.setLastName(newUser.getLastName());
		user.setPhNo(newUser.getPhNo());
		return userService.updateUser(user);
	}
	return null;
}

@DeleteMapping("/deleteUser/{id}")
public ResponseEntity<String> deleteUser(@PathVariable int id){
	System.out.println(id);
	return userService.deleteUserById(id);
}

}