package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.contactentity;

@Repository
public interface contactRepository extends JpaRepository<contactentity, String> {

}
