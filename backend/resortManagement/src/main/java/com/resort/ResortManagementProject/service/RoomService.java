package com.resort.ResortManagementProject.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.resort.ResortManagementProject.entity.Booking;
import com.resort.ResortManagementProject.entity.Room;
import com.resort.ResortManagementProject.entity.User;
import com.resort.ResortManagementProject.repository.BookingRepository;
import com.resort.ResortManagementProject.repository.RoomRepository;


@Service
public class RoomService {
	
	@Autowired
	private RoomRepository roomRepo;
	
	@Autowired
	private BookingRepository bookingRepo;
	
	
	public Room saveRoomData(Room room) {
		Room saveRoom= roomRepo.save(room);
		return saveRoom;
	}

	public Room getRoomById(int id) {
		Optional<Room> room = roomRepo.findById(id);
		return room.get();
	}
	
	public List<Room> getAllRoomData(){
		List<Room> room= roomRepo.findAll();
		return room;
	}
	

	 
	 public List<Room> findAvailableRooms(String checkInDate, String checkOutDate, int capacity) {
		 System.out.println(checkInDate);
		    LocalDate startDate = LocalDate.parse(checkInDate);
		    LocalDate endDate = LocalDate.parse(checkOutDate);

		    List<Booking> overlappingBookings = bookingRepo.findByCheckInDateBetweenAndCheckOutDateBetween(
		    	    startDate.minusDays(1), endDate.plusDays(1),
		    	    startDate.minusDays(1), endDate.plusDays(1)
		    	);

		    Set<Integer> bookedRoomIds = overlappingBookings.stream()
		            .filter(booking -> booking.getRoom() != null)
		            .map(booking -> booking.getRoom().getRoomId())
		            .collect(Collectors.toSet());



		    List<Room> availableRooms = roomRepo.findByAvailabilityAndCapacityGreaterThanEqual("yes", capacity);
		    availableRooms.removeIf(room -> bookedRoomIds.contains(room.getRoomId()));

		    return availableRooms;
		}
	 
	 public Room findRoomById(int id) {
		 Optional<Room> room=roomRepo.findById(id);
		if(!room.isEmpty()) {
			Room oldRoom=room.get();
			return oldRoom;
		}
		return null;
	 }
	
	 public Room updateRoom(Room oldRoom,Room newRoom) {
		oldRoom.setAvailability(newRoom.getAvailability());
		oldRoom.setCapacity(newRoom.getCapacity());
		oldRoom.setPricePerNight(newRoom.getPricePerNight());
		 return roomRepo.save(oldRoom);
		 
	 }
	 
	 public ResponseEntity<String> deleteRoomById(int id){
			Optional<Room> room= roomRepo.findById(id);
			if(room.isPresent()) {
				roomRepo.deleteById(id);
			return ResponseEntity.status(HttpStatus.OK).body("ROOM DELETED SUCCESSFULLY");
			}
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("ROOM DETAILSs NOT FOUND WITH THIS ID");
		}
}