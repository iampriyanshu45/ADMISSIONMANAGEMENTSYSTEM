package com.iacsd.admission.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iacsd.admission.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

}
