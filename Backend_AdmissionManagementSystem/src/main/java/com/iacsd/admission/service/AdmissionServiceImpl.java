package com.iacsd.admission.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iacsd.admission.model.Admission;
import com.iacsd.admission.model.Course;
import com.iacsd.admission.model.User;
import com.iacsd.admission.repository.AdmissionRepository;
import com.iacsd.admission.repository.CourseRepository;
import com.iacsd.admission.repository.UserRepository;

@Service
@Transactional
public class AdmissionServiceImpl implements AdmissionService {
	
	@Autowired
	private AdmissionRepository admRepo;
	@Autowired
	private CourseRepository courseRepository;
	@Autowired
	private UserRepository userRepository;

	@Override
	public Admission saveAdmission(Admission adm, long courseId, long userId) {
		User user = userRepository.findById(userId).orElseThrow();
		Course course = courseRepository.findById(courseId).orElseThrow();
		adm.setCourse(course);
		adm.setUser(user);
		return admRepo.save(adm);
	}

	@Override
	public List<Admission> getAllAdmissions() {
		return admRepo.findAll();
		
	}

	@Override
	public void deleteAdmission(Admission adm) {
		 admRepo.delete(adm);
		
	}

	@Override
	public Admission updateAdmission(Admission adm) {
		return admRepo.save(adm);
	}

}
