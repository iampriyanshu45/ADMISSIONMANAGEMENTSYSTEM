package com.iacsd.admission.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.iacsd.admission.model.User;

@Repository
public interface UserRepository  extends JpaRepository<User, Long>{

	User findByEmailAndUserPassword(String email, String userPassword);
	
	User findByEmail(String email);

	
	
	
	
	
	
}
