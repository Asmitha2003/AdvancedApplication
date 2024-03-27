package com.example.demo.controller;
import com.example.demo.entity.Cruise;
import com.example.demo.service.AdmincruiseSer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/admin")

public class AdmincruiseCon {
    
    @Autowired
    private AdmincruiseSer adminser;

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getadmin")
    public List<Cruise> getAdmincruiseDetails() {
        return adminser.getAllAdmincruise();
    }
    
    @PostMapping("/postadmin")
    public String saveAdmin(@RequestBody Cruise admin) {
    adminser.saveAdmincruise(admin);
    return "Cruise Successfully Added";
}
 
    @PutMapping("/updateadmin")
    public String updateAdminDetails(@RequestBody Cruise admin, @RequestParam int id) {
         admin.setId(id);
         adminser.updateAdmincruise(admin);
         return "Cruise Successfully Updated";
    }

    @DeleteMapping("/deleteadmin")
    public String deleteAdminDetails(@RequestParam int id) {
        adminser.deleteAdmincruise(id);
        return "Existing Cruise Successfully deleted";
    }
}
