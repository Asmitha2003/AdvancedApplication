package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.UserRegisterr;

public interface UserRegisterRepository extends JpaRepository<UserRegisterr,Long>{
	Optional<UserRegisterr>findByUsername(String username);
}