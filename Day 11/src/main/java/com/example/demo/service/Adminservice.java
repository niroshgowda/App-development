package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Admin;
import com.example.demo.repository.Adminrepository;

@Service
public class Adminservice {
	@Autowired
	private Adminrepository ar;
	public List<Admin>getAdmin(){
		return ar.findAll();
	}
	public void postAdmin(Admin ua) {
		ar.save(ua);
	}

}
