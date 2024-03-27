package com.example.demo.service;

import com.example.demo.entity.Contact;
import com.example.demo.repository.ContactRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ContactSer {
    
    @Autowired
    private ContactRepo contactrepo;

    public Contact saveContact(Contact contact) {
        return contactrepo.save(contact);
    }

    public List<Contact> getAllContact() {
        return contactrepo.findAll();
    }

    public void updateContact(Contact contact) {
        contactrepo.save(contact);
    }

    public void deleteContact(int id) {
        contactrepo.deleteById(id);
    }
}
