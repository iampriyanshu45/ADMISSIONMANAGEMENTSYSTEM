package com.iacsd.admission.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
@Entity
public class Payment extends BaseEntity {
	
	@Column(name = "payment_date")
	private LocalDate paymentDate;
	
	@Column(name="payment_amount")
	private int amount;

    @ManyToOne
	@JoinColumn(name = "course_id") 
    private Course course;
    
    @ManyToOne
	@JoinColumn(name = "user_id") 
    private User user;
    
    
    public Payment() {
		// TODO Auto-generated constructor stub
	}
    

	public Payment(LocalDate paymentDate, int amount, Course course, User user) {
		super();
		this.paymentDate = LocalDate.now();
		this.amount = amount;
		this.course = course;
		this.user = user;
	}

	public LocalDate getPaymentDate() {
		return paymentDate;
	}

	public void setPaymentDate(LocalDate paymentDate) {
		this.paymentDate = paymentDate;
		
		
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public Course getCourse() {
		return course;
	}
	

	public void setCourse(Course course) {
		this.course = course;
	}
	
	
	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Payment [paymentDate=" + paymentDate + "]";
	}

}
