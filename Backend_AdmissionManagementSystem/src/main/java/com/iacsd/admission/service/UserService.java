package com.iacsd.admission.service;

import java.util.List;

import com.iacsd.admission.exception.UserAlreadyExistsException;
import com.iacsd.admission.exception.UserNotFoundException;
import com.iacsd.admission.model.Course;
import com.iacsd.admission.model.User;

public interface UserService {

    public User findByEmailAndPassword(String userId, String password) throws UserNotFoundException;

    boolean saveUser(User user) throws UserAlreadyExistsException;
    
    public User findByEmail(String email);
    
    public List<User> findUsers();
	
}
