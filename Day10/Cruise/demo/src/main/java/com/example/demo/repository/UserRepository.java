package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.UserRegisterr;

public interface UserRepository extends JpaRepository<UserRegisterr, Long> {
}