package com.iacsd.admission.service;

import java.util.List;

import com.iacsd.admission.model.Admission;

public interface AdmissionService {
	
	public Admission saveAdmission(Admission adm,long courseId, long userId);
	
	public List<Admission> getAllAdmissions();
	
	public void deleteAdmission(Admission adm);
	
	public Admission updateAdmission(Admission adm);

}
