package com.iacsd.admission.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iacsd.admission.model.Feedback;
import com.iacsd.admission.service.FeedbackService;

@RestController
@RequestMapping("/api/v1/feedback")
@CrossOrigin(origins = "http://localhost:3000")
public class FeedbackController {
	
	@Autowired
	private FeedbackService feedbackService;
	
	@GetMapping
	public ResponseEntity<List<Feedback>> feedbacks()
	{
		List<Feedback> feedback=feedbackService.getAllFeedbacks();
		return new ResponseEntity<List<Feedback>>(feedback,HttpStatus.OK);
	}
	
	@PostMapping("/{courseId}")
	public ResponseEntity<Feedback> saveFeedback(@RequestBody Feedback fback, @PathVariable long courseId){
		Feedback feedback=feedbackService.saveFeedback(fback, courseId);
		return new ResponseEntity<Feedback>(feedback,HttpStatus.OK);
	}

}
