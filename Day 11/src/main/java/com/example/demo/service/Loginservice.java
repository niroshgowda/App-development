package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Login;
import com.example.demo.repository.Loginrepository;

@Service
public class Loginservice {
	@Autowired
	private Loginrepository lr;
	public List<Login>getLogin(){
		return lr.findAll();
	}
	public void postLogin(Login ul) {
		lr.save(ul);
	}
//	public void deleteLogin(int id) {
//		lr.deleteById(id);
//	}

}
