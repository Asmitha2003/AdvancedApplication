package com.example.demo.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.dto.Request.AuthenticationRequest;
import com.example.demo.dto.Request.RegisterRequest;
import com.example.demo.dto.Response.AuthenticationResponse;
import com.example.demo.entity.UserRegisterr;
import com.example.demo.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin("*")
@RequestMapping("/auth")	
@RequiredArgsConstructor
public class AuthentiicationController {
	
	private final AuthenticationService service;
	@PostMapping("/register")
	 public ResponseEntity<String> register(
		      @RequestBody RegisterRequest request
		  ) {
		service.register(request);
		    return ResponseEntity.ok("Registered Successfully");
		  }

		  @PostMapping("/authenticate")
		  public ResponseEntity<AuthenticationResponse> authenticate(
		      @RequestBody AuthenticationRequest request
		  ) {
		    return ResponseEntity.ok(service.authenticate(request));
		  }

		  @PreAuthorize("hasAuthority('ADMIN')")
		  @GetMapping("/users")
		    public ResponseEntity<List<UserRegisterr>> getAllUsers() {
		        List<UserRegisterr> users = service.getAllUsers();
		        return ResponseEntity.ok(users);
		    }

			@PreAuthorize("hasAuthority('ADMIN')")
		    @DeleteMapping("/users/{userId}")
		    public ResponseEntity<String> deleteUser(@PathVariable Long userId) {
		        service.deleteUser(userId);
		        return ResponseEntity.ok("User deleted successfully");
		    }

}
