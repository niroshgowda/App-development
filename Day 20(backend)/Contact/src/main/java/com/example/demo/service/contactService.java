package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


import com.example.demo.entity.contactentity;
import com.example.demo.repository.contactRepository;

@Service
public class contactService {
	
	@Autowired
	private contactRepository contactrepo;

	public List<contactentity> getAllcontact() {
        return contactrepo.findAll();
    }	
    public contactentity getByEmail(String email) {
        Optional<contactentity> contactOptional = contactrepo.findById(email);
        return contactOptional.orElse(null);
    }
    
    public contactentity createcontact(contactentity contact) {
        return contactrepo.save(contact);
    }
    public contactentity updatecontact(String email, contactentity updatedContact) {
        Optional<contactentity> contactOptional = contactrepo.findById(email);
        
        if (contactOptional.isPresent()) {
            contactentity existingContact = contactOptional.get();
            existingContact.setName(updatedContact.getName());
            return contactrepo.save(existingContact);
        } else {
            return null;
        }
    }
    public void deleteUser(String email) {
        contactrepo.deleteById(email);
    }


}
