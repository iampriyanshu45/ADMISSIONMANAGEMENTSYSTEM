package com.iacsd.admission.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iacsd.admission.model.Course;
import com.iacsd.admission.model.Payment;
import com.iacsd.admission.model.User;
import com.iacsd.admission.repository.CourseRepository;
import com.iacsd.admission.repository.PaymentRepository;
import com.iacsd.admission.repository.UserRepository;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {
	
	@Autowired
	private PaymentRepository payRepo;
	
	@Autowired
	private CourseRepository courseRepository;
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public List<Payment> getAllPayments() {
		return payRepo.findAll();
	}

	@Override
	public Payment savePayment(Payment pay, long courseId, long userId) {
		Course course = courseRepository.findById(courseId).orElseThrow();
		pay.setCourse(course);
		User user = userRepository.findById(userId).orElseThrow();
		pay.setUser(user);
		return payRepo.save(pay);
	}

}
