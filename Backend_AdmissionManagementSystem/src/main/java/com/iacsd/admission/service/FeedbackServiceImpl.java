package com.iacsd.admission.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iacsd.admission.model.Course;
import com.iacsd.admission.model.Feedback;
import com.iacsd.admission.repository.CourseRepository;
import com.iacsd.admission.repository.FeedbackRepository;

@Service
@Transactional
public class FeedbackServiceImpl implements FeedbackService {
	
	@Autowired
	private FeedbackRepository feedbackRepo;
	
	@Autowired
	private CourseRepository courseRepository;

	@Override
	public List<Feedback> getAllFeedbacks() {
		return feedbackRepo.findAll();
	}

	@Override
	public Feedback saveFeedback(Feedback feedback, long courseId) {
		Course course=courseRepository.findById(courseId).orElseThrow();
		feedback.setCourse(course);
		return feedbackRepo.save(feedback);
	}

}
