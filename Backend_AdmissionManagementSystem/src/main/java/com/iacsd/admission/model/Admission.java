package com.iacsd.admission.model;

import java.time.LocalDate;

import javax.persistence.*;

import org.springframework.format.annotation.DateTimeFormat;

/*
 * Properties of Admission : admissionId , date , student , course , status
 */
@Entity
@Table(name = "admissions_tbl", uniqueConstraints = @UniqueConstraint(columnNames = { "user_id", "course_id" }))
public class Admission extends BaseEntity {
	@Column(name = "admission_date")
	private LocalDate admissionDate;
	// Admission HAS-A Student (i.e linked with Student)
@ManyToOne//(fetch = FetchType.LAZY) // => 1 student can take multiple admissions to different courses
	// Student 1<-----* Admission
	@JoinColumn(name = "user_id") // to specify name of the FK col to hibernate
	private User user;
	// Admission HAS-A Course (i.e linked with Course)
	@ManyToOne//(fetch = FetchType.LAZY)// => 1 course can have multiple admissions for different students
	@JoinColumn(name = "course_id")
	// Course 1 <----- * Admission
	private Course course;
	@Enumerated(EnumType.STRING)
	@Column(length = 50)
	private Status status;
	
	@Column(name="full_name")
	private String fullName;
	
	@Column(name="guardian_name")
	private String guardianName;
	
	@Column(name="email")
	private String email;
	
	@Column(name="birth_date")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate birthDate;
	
	@Column(name="mobile_number")
	private String mobileNumber;
	
	@Column(name="address")
	private String address;
	
	

	public Admission() {
		// TODO Auto-generated constructor stub
	}

	

	public Admission(LocalDate admissionDate, User user, Course course, Status status, String fullName,
			String guardianName, String email, LocalDate birthDate, String mobileNumber, String address) {
		super();
		this.admissionDate = LocalDate.now();
		this.user = user;
		this.course = course;
		this.status = status.STUDENT_ADMITTED;
		this.fullName = fullName;
		this.guardianName = guardianName;
		this.email = email;
		this.birthDate = birthDate;
		this.mobileNumber = mobileNumber;
		this.address = address;
		
	}



	// all setters n getters
	public LocalDate getAdmissionDate() {
		return admissionDate;
	}

	public void setAdmissionDate(LocalDate admissionDate) {
		this.admissionDate = admissionDate;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}
	
	



	public String getFullName() {
		return fullName;
	}



	public void setFullName(String fullName) {
		this.fullName = fullName;
	}



	public String getGuardianName() {
		return guardianName;
	}



	public void setGuardianName(String guardianName) {
		this.guardianName = guardianName;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public LocalDate getBirthDate() {
		return birthDate;
	}



	public void setBirthDate(LocalDate birthDate) {
		this.birthDate = birthDate;
	}



	public String getMobileNumber() {
		return mobileNumber;
	}



	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	@Override
	public String toString() {
		return "Admission [admissionDate=" + admissionDate + ",  status="
				+ status + ", fullName=" + fullName + ", guardianName=" + guardianName + ", email=" + email
				+ ", birthDate=" + birthDate + ", mobileNumber=" + mobileNumber + ", address=" + address
				+ ", getId()=" + getId() + "]";
	}

	// Project Tip : DO NOT add any association fields in toString
	

}
