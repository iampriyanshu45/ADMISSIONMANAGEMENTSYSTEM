package com.iacsd.admission.service;

import java.util.List;
import java.util.NoSuchElementException;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iacsd.admission.exception.UserAlreadyExistsException;
import com.iacsd.admission.exception.UserNotFoundException;
import com.iacsd.admission.model.Course;
import com.iacsd.admission.model.User;
import com.iacsd.admission.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepository userRepository;

	public User findByEmailAndPassword(String email, String password) throws UserNotFoundException {
				return userRepository.findByEmailAndUserPassword(email, password);
	}

	
	public boolean saveUser(User user) throws UserAlreadyExistsException {
		try
    	{
    		User findById = userRepository.findByEmail(user.getEmail());
    		if (findById!=null) {
    	    	throw new UserAlreadyExistsException("Cannot Register User");
			}
    		
    		if (findById == null && user.getEmail()!=null && user.getUserPassword()!=null) {
    			User userAdded = userRepository.save(user);
    	    	if(userAdded!=null)
    	    	{
    	    		return true;
    	    	}
			}
    		
    	}
    	catch(NoSuchElementException exception)
    	{
    		exception.printStackTrace();
    		User userAdded = userRepository.save(user);
	    	if(userAdded!=null)
	    	{
	    		return  true;
	    	}
    	}
		return false;
	}

	
	public User findByEmail(String email) {
			return userRepository.findByEmail(email);
	}
	
	public List<User> findUsers() {
		return userRepository.findAll();
	}

}
