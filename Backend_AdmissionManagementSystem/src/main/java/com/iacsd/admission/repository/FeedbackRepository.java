package com.iacsd.admission.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iacsd.admission.model.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

}
