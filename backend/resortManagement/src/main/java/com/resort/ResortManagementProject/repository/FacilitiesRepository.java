package com.resort.ResortManagementProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.resort.ResortManagementProject.entity.Facilities;


@Repository
public interface FacilitiesRepository extends JpaRepository<Facilities, Integer> {

}
