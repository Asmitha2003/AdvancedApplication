
package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Book;

public interface bookingRepo extends JpaRepository<Book,Long>{

}



