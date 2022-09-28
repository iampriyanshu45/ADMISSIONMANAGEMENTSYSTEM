package com.iacsd.admission.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.iacsd.admission.model.Course;

import com.iacsd.admission.repository.CourseRepository;
import com.iacsd.admission.repository.UserRepository;
import com.iacsd.admission.service.CourseServicempl;

@RestController
@RequestMapping("/api/v1/course")
@CrossOrigin(origins = "http://localhost:3000")
public class CourseController {

	@Autowired
	private CourseServicempl courseService;
	
	
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private CourseRepository courseRepository;
	
	@GetMapping
	public ResponseEntity<List<Course>> courses () {
		List<Course> courses = courseService.findCourses();
		return new ResponseEntity<List<Course>>(courses, HttpStatus.OK);
		
	}
	
	@PostMapping
	public ResponseEntity<Course> saveCourse (@RequestBody Course course) {
		Course saveCourse = courseService.saveCourse(course);
		return new ResponseEntity<Course>(saveCourse, HttpStatus.CREATED);
	}
	
	
	@PutMapping("/admin")
	public ResponseEntity<Course> updateCourse (@RequestBody Course course) {
		Course saveCourse = courseService.saveCourse(course);
		return new ResponseEntity<Course>(saveCourse, HttpStatus.OK);
	}
	
	@DeleteMapping("/admin")
	public ResponseEntity<?> deleteCourse (@RequestParam String courseId) {
		//courseService.deleteCourse(course);
		courseRepository.deleteById(Long.parseLong(courseId));
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	

	
	
}
