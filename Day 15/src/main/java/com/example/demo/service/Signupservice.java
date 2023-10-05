package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Signup;
import com.example.demo.repository.Signuprepository;

@Service
public class Signupservice {
	@Autowired
	private Signuprepository sr;
	public List<Signup>getSignup(){
		return sr.findAll();
	}
	public void postSignup(Signup us) {
		sr.save(us);
	}
	public void deleteSignup(int id) {
		sr.deleteById(id);
	}


}
