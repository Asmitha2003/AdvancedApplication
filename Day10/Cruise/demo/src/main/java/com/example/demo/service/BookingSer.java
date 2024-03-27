package com.example.demo.service;

import com.example.demo.entity.Book;
import com.example.demo.repository.bookingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BookingSer {
    
    @Autowired
    private bookingRepo bookingrepo;

    public Book saveBooking(Book book) {
        // book.calculateTotalPrice(); // Calculate totalPrice
        return bookingrepo.save(book);
    }

    public List<Book> getAllBooking() {
        return bookingrepo.findAll();
    }

    public void updateBooking(Book book) {
        // book.calculateTotalPrice(); // Calculate totalPrice before updating
        bookingrepo.save(book);
    }

    public void deleteBooking(Long id) {
        bookingrepo.deleteById(id);
    }
}
