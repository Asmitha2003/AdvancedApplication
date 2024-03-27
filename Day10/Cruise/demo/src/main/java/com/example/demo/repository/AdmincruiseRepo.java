package com.example.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Cruise;


public interface  AdmincruiseRepo extends JpaRepository<Cruise, Integer> {
   
}
