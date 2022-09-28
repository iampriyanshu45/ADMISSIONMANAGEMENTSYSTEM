package com.iacsd.admission.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iacsd.admission.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long>{

}
