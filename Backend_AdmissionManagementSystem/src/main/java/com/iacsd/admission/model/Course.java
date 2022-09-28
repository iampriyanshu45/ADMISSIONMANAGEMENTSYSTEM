package com.iacsd.admission.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Course extends BaseEntity {
	
	@Column
	private String name;
	
	@Column
	private int fees;
	
	@Column
	private String teacher;
	
	
	
	public Course() {
		
	}

	public Course(String name, int fees, String teacher) {
	//	super();
		this.name = name;
		this.fees = fees;
		this.teacher = teacher;
	}


	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getFees() {
		return fees;
	}

	public void setFees(int fees) {
		this.fees = fees;
	}

	public String getTeacher() {
		return teacher;
	}

	public void setTeacher(String teacher) {
		this.teacher = teacher;
	}

	@Override
	public String toString() {
		return "Course [name=" + name + ", fees=" + fees + ", teacher=" + teacher + ", getId()=" + getId() + "]";
	}
	
	

	
	
	
	
	
	
}
