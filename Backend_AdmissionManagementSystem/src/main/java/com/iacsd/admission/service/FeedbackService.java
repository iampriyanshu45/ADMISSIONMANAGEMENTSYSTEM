package com.iacsd.admission.service;

import java.util.List;

import com.iacsd.admission.model.Feedback;

public interface FeedbackService {
	
	public List<Feedback> getAllFeedbacks();
	
	public Feedback saveFeedback(Feedback feedback, long courseId);

}
