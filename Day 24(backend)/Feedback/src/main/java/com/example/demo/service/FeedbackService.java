package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entity.Feedback;
import com.example.demo.repository.FeedbackRepo;

@Service
public class FeedbackService {
	@Autowired
	private FeedbackRepo fr;
	
	public List<Feedback> getAllfeedback() {
		return fr.findAll();
	}
	public Feedback getByName(String name) {
        Optional<Feedback> feedbackOptional = fr.findById(name);
        return feedbackOptional.orElse(null);
    }
	public Feedback createfeedback(Feedback feedback) {
        return fr.save(feedback);
    }

}
