package com.iacsd.admission.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.iacsd.admission.model.Course;
import com.iacsd.admission.model.User;
import com.iacsd.admission.repository.CourseRepository;
import com.iacsd.admission.repository.UserRepository;

@Service
@Transactional
public class CourseServicempl implements CourseService{

	@Autowired
	private CourseRepository courseRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	
	
	
	public Course saveCourse(Course course) {
		return courseRepository.save(course);
		//return null;
	}

	
	public Course updateCourse(Course course) {
		return courseRepository.save(course);
		//return null;
	}

	
	public void deleteCourse(Course course) {
		courseRepository.delete(course);
	}


	public List<Course> findCourses() {
		return courseRepository.findAll();
	}





	
	
	
}
