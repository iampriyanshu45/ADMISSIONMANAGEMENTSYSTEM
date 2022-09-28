package com.iacsd.admission.model;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
@Entity
public class Feedback extends BaseEntity {
	
	@Column(name = "remark")
	private String remark;

    @ManyToOne
	@JoinColumn(name = "course_id") 
    private Course course;
    
    public Feedback() {
		// TODO Auto-generated constructor stub
	}

	public Feedback(String remark, Course course) {
		super();
		this.remark = remark;
		this.course = course;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}

	@Override
	public String toString() {
		return "Feedback [remark=" + remark + "]";
	}
    
    

}
