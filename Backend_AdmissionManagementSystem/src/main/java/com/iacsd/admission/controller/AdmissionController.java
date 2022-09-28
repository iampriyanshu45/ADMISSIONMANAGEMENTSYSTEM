package com.iacsd.admission.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.iacsd.admission.model.Admission;
import com.iacsd.admission.repository.AdmissionRepository;
import com.iacsd.admission.service.AdmissionService;

@RestController
@RequestMapping("/api/v1/admission")
@CrossOrigin(origins = "http://localhost:3000")
public class AdmissionController {
	
	@Autowired
	private AdmissionService admService;
	
	@Autowired AdmissionRepository admRepo;
	
	@GetMapping
	public ResponseEntity<List<Admission>> admissions () {
		List<Admission> admissions = admService.getAllAdmissions();
		return new ResponseEntity<List<Admission>>(admissions, HttpStatus.OK);
		
	}
	
	@PostMapping("/{courseId}/{userId}")
	public ResponseEntity<Admission> saveAdm (@RequestBody Admission admission,@PathVariable long courseId,@PathVariable long userId) {
		Admission saveAdmission = admService.saveAdmission(admission, courseId,userId);
		return new ResponseEntity<Admission>(saveAdmission, HttpStatus.CREATED);
	}
	
	//@PutMapping("/admin")
	//public ResponseEntity<Admission> updateAdmission (@RequestBody Admission admission) {
//		Admission saveAdmission = admService.saveAdmission(admission);
		//return new ResponseEntity<Admission>(saveAdmission, HttpStatus.OK);
	//}
	
	@DeleteMapping("/admin")
	public ResponseEntity<?> deleteAdmission (@RequestParam String admissionId) {
		//courseService.deleteCourse(course);
		admRepo.deleteById(Long.parseLong(admissionId));
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
