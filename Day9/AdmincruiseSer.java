package com.example.demo.service;

import com.example.demo.entity.Cruise;
import com.example.demo.repository.AdmincruiseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service

public class AdmincruiseSer {
    @Autowired
    private AdmincruiseRepo adminrepo;

    public Cruise saveAdmincruise(Cruise admin) {
        return adminrepo.save(admin);
    }

    public List<Cruise> getAllAdmincruise() {
        return adminrepo.findAll();
    }

    public void updateAdmincruise(Cruise admin) {
        adminrepo.save(admin);
    }

    public void deleteAdmincruise(int id) {
        adminrepo.deleteById(id);
    }
}
