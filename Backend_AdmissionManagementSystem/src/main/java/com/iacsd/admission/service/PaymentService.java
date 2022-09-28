package com.iacsd.admission.service;

import java.util.List;

import com.iacsd.admission.model.Payment;

public interface PaymentService {
	
	public List<Payment> getAllPayments();
	
	public Payment savePayment(Payment pay, long courseId, long userId);

}
