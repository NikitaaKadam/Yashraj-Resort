package com.resort.ResortManagementProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.resort.ResortManagementProject.entity.Image;

@Repository
public interface ImageRepository extends JpaRepository<Image, Integer> {

}