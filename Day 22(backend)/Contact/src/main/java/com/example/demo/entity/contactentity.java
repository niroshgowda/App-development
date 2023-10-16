package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class contactentity {
	@Id
	private String name;
	private String email;
	private String msg;

}
