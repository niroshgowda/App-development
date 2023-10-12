package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entity.Feedback;
import com.example.demo.service.FeedbackService;
@CrossOrigin
@RestController
@RequestMapping(path="/profile")
public class FeedbackControl {
	@Autowired
	private FeedbackService fs;
	
	@GetMapping("/getting")
    public List<Feedback> getAllfeedback() {
        return fs.getAllfeedback();
    }
	@GetMapping("/{name}")
    public Feedback getByName(@PathVariable String name) {
        return fs.getByName(name);
    }
	@PostMapping("/posting")
    public Feedback createUser(@RequestBody Feedback feedback) {
    	return fs.createfeedback(feedback);
    }

}
