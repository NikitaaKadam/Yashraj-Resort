package com.resort.ResortManagementProject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.resort.ResortManagementProject.entity.User;

public interface UserRepository extends JpaRepository<User,Integer> {
	public List<User> findByuserRole(String role);
	public User findByemail(String email);
	public User findByphNo(String phNo);
}
