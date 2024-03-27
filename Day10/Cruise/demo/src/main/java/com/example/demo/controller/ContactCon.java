package com.example.demo.controller;

import com.example.demo.entity.Contact;
import com.example.demo.service.ContactSer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/contact")

public class ContactCon {
    
    @Autowired
    private ContactSer contactser;

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getcontact")
    public List<Contact> getContactDetails() {
        return contactser.getAllContact();
    }
    
    @PostMapping("/contacting")
    public String contacting(@RequestBody Contact contact) {
    contactser.saveContact(contact);
    return "Contact Successfully Saved";
}
 
    @PutMapping("/updatecontact")
    public String updateContactDetails(@RequestBody Contact contact, @RequestParam int id) {
         contact.setId(id);
         contactser.updateContact(contact);
         return "Contact Successfully Updated";
    }

    @DeleteMapping("/deletecontact")
    public String deleteContactDetails(@RequestParam int id) {
        contactser.deleteContact(id);
        return "Successfully deleted";
    }
}
