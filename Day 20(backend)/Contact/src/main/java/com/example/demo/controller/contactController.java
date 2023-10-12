package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entity.contactentity;
import com.example.demo.service.contactService;
@CrossOrigin
@RestController
@RequestMapping(path="/profile")
public class contactController {
	@Autowired
	private contactService conservice;
	  @GetMapping("/get")
	    public List<contactentity> getAllcontact() {
	        return conservice.getAllcontact();
	    }
	    @GetMapping("/{email}")
	    public contactentity getByEmail(@PathVariable String email) {
	        return conservice.getByEmail(email);
	    }
	    @PostMapping("/post")
	    public contactentity createUser(@RequestBody contactentity contact) {
	    	return conservice.createcontact(contact);
	    }
	    @PutMapping("/{email}")
	    public contactentity updateUser(@PathVariable String email, @RequestBody contactentity updatedcontact) {
	        return conservice.updatecontact(email, updatedcontact);
	    }
	    @DeleteMapping("/{email}")
	    public void deleteUser(@PathVariable String email) {
	        conservice.deleteUser(email);
	    }

}
