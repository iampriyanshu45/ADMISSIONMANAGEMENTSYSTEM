package com.iacsd.admission.service;

import java.util.List;

import com.iacsd.admission.model.Course;
import com.iacsd.admission.model.User;

public interface CourseService {
	
	public List<Course> findCourses();
	
	public Course saveCourse(Course course);
	
	public Course updateCourse(Course course);
	
	public void deleteCourse(Course course);
	

}
