package com.iacsd.admission.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iacsd.admission.model.Admission;
import com.iacsd.admission.model.Course;

public interface AdmissionRepository extends JpaRepository<Admission, Long> {

	Admission save(Admission adm);

}
