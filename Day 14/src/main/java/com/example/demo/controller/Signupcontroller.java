package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Signup;
import com.example.demo.service.Signupservice;

@RestController
public class Signupcontroller {
	@Autowired
	private Signupservice ss;
	
	
	@GetMapping("/getting")
	public List<Signup>getSignup(){
		return ss.getSignup();
	}
	@PostMapping("/posting")
	public void postSignup(@RequestBody Signup us) {
		ss.postSignup(us);
	}
	@DeleteMapping("/del/{id}")
	public void deleteSignup(@PathVariable int id) {
		ss.deleteSignup(id);
	}

}
