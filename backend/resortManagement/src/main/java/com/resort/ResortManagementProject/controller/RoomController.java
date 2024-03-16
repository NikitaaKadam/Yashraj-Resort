package com.resort.ResortManagementProject.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.resort.ResortManagementProject.entity.Room;
import com.resort.ResortManagementProject.service.RoomService;


@RestController
@CrossOrigin(origins ="*")
public class RoomController {
	
	@Autowired
	private RoomService roomService;
	
    public static String uploadDirectory = "C:\\ResortManagement\\frontend\\resort\\public";
	
	//saving image in database
	@PostMapping("/saveRoom")
	public Room saveRoom(@ModelAttribute Room room, @RequestParam("room_img") MultipartFile file) throws IOException {
		String originalFilename = file.getOriginalFilename();
		System.out.println(originalFilename);
		Path fileNameAndPath=Paths.get(uploadDirectory, originalFilename);
		Files.write(fileNameAndPath, file.getBytes());
		room.setRoomImage(originalFilename);
		Room saveRoomData= roomService.saveRoomData(room);
		return saveRoomData;
	}
	
//	@PutMapping("/updateRoom")
//	public Room updateRoom(@ModelAttribute Room room, @RequestParam("room_img") MultipartFile file) throws IOException {
//		String newFileName = file.getOriginalFilename();
//		Path fileNameAndPath=Paths.get(uploadDirectory, newFileName);
//		Files.write(fileNameAndPath, file.getBytes());
//		room.setRoomImage(newFileName);
//		Room saveRoomData= roomService.saveRoomData(room);
//		return saveRoomData;
//	}
	
	 @GetMapping("/available")
	    public ResponseEntity<List<Room>> getAvailableRooms(
	            @RequestParam("checkInDate") String checkInDate,
	            @RequestParam("checkOutDate") String checkOutDate,
	            @RequestParam("capacity") int capacity) {

	        List<Room> availableRooms = roomService.findAvailableRooms(checkInDate, checkOutDate, capacity);
	        return ResponseEntity.ok(availableRooms);
	    }
	 
	//fetching the data by id
		@GetMapping("/room/{id}")
		public ResponseEntity<Room> getRoomById(@PathVariable int id){
			Room room = roomService.getRoomById(id);
			return ResponseEntity.ok().body(room);
		}
		
		//fetching img
		@GetMapping("/room/getProfileImage/{id}")
		public ResponseEntity<Resource> getProfileImage(@PathVariable int id) throws IOException{
			//Fetching thr room obj from repository by id
			Room room = roomService.getRoomById(id);
			//fetch the image from student obj
			Path imgPath =Paths.get(uploadDirectory, room.getRoomImage());
			Resource resource = new FileSystemResource(imgPath.toFile());
			String contentType = Files.probeContentType(imgPath);
			return ResponseEntity.ok().contentType(MediaType.parseMediaType(contentType)).body(resource);	
		}
		
		@GetMapping("/room/AllRoomData")
		public List<Room> getAllRoomData(){
			List<Room> allRoom = roomService.getAllRoomData();
			return allRoom;
		}
		
		@DeleteMapping("/room/deleteRoom/{id}")
		public ResponseEntity<String> deleteRoom(@PathVariable  int id) {
			
			return roomService.deleteRoomById(id);
		}
		
		 @PutMapping("/room/updateRoom/{id}")
		 public ResponseEntity<String> updateRoom(@PathVariable int id,@RequestBody Room room) {
			 
			 Room oldRoom= roomService.findRoomById(id);
			 System.out.println(oldRoom);
			 if(oldRoom!=null) {
				Room updatedRoom= roomService.updateRoom(oldRoom, room);
				 return ResponseEntity.status(HttpStatus.OK).body("Room Details Updated");
			 }
			 return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Room Details Failed to Update"); 
			 
		 }
}