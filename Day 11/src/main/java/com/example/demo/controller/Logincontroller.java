package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Login;
import com.example.demo.service.Loginservice;


@RestController
public class Logincontroller {
	@Autowired
	private Loginservice ls;
	
	
	@GetMapping("/getlogin")
	public List<Login>getLogin(){
		return ls.getLogin();
	}
	@PostMapping("/postlogin")
	public void postLogin(@RequestBody Login ul) {
		ls.postLogin(ul);
	}
//	@DeleteMapping("/dellogin/{id}")
//	public void deleteLogin(@PathVariable int id) {
//		ls.deleteLogin(id);
//	}

}
