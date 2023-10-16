package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Feedback {
	@Id
	private String rating;
	private String name;
	private String email;
	private String comment;

}
