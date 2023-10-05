package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Admin;
import com.example.demo.service.Adminservice;

@RestController
public class Admincontroller {
	@Autowired
    private Adminservice as;
	
	
	@GetMapping("/get")
	public List<Admin>getAdmin(){
		return as.getAdmin();
	}
	@PostMapping("/post")
	public void postAdmin(@RequestBody Admin ua) {
		as.postAdmin(ua);
	}
	@DeleteMapping("/deleting/{id}")
	public void deleteAdmin(@PathVariable int id) {
		as.deleteAdmin(id);
	}
	@GetMapping("/public")
	public String welcome() {
		return "Hello world";
	}
	@GetMapping("/secure")
	public String hello() {
		return "Hello world";
	}

}
