package com.iacsd.admission.exception;

@SuppressWarnings("serial")
public class UserNotFoundException extends Exception {

    public UserNotFoundException(String message) {
        super(message);
    }
}