package com.iacsd.admission.model;

import javax.persistence.Column;
import javax.persistence.Entity;



@Entity
public class User extends BaseEntity {

	@Column
	private String firstName;
	
	@Column
	private String lastName;
	
	@Column
	private String userPassword;
	
	@Column
	private String role;
	
	@Column(unique = true)
	private String email;
	
	
	
	
	public User() {
		
	}


	public User(String firstName, String lastName, String userPassword, String email, String role) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.userPassword = userPassword;
		this.email = email;
		this.role = role;
	}

	public String getFirstName() {
		return firstName;
	}


	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public void setLastName(String lastName) {
		this.lastName = lastName;
	}


	public String getUserPassword() {
		return userPassword;
	}


	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}

	

	


	
	
	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}


	@Override
	public String toString() {
		return "User [firstName=" + firstName + ", lastName=" + lastName + ", userPassword=" + userPassword
				+ ", emailId=" + email + "]";
	}
	
	
	
}
