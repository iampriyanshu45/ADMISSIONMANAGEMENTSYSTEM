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

import com.iacsd.admission.model.Payment;
import com.iacsd.admission.service.PaymentService;

@RestController
@RequestMapping("/api/v1/payment")
@CrossOrigin(origins = "http://localhost:3000")
public class PaymentController {
	
	@Autowired
	private PaymentService payService;
	
	@GetMapping
	public ResponseEntity<List<Payment>> payments()
	{
		List<Payment> payment=payService.getAllPayments();
		return new ResponseEntity<List<Payment>>(payment,HttpStatus.OK);
	}
	
	@PostMapping("/{courseId}/{userId}")
	public ResponseEntity<Payment> savePayment(@RequestBody Payment pay, @PathVariable long courseId, @PathVariable long userId){
		Payment payment=payService.savePayment(pay, courseId, userId);
		return new ResponseEntity<Payment>(payment,HttpStatus.OK);
	}

}
