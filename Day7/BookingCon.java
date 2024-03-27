package com.example.demo.controller;

import com.example.demo.entity.Book;
import com.example.demo.service.BookingSer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/cruise")
public class BookingCon {

    @Autowired
    private BookingSer bookingser;

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getbooking")
    public List<Book> getBookingDetails() {
        return bookingser.getAllBooking();
    }
    
    @PostMapping("/booking")
    public String booking(@RequestBody Book book) {
    // int totalPrice = book.getTotalPrice();
    // book.setTotalPrice(totalPrice); 
    bookingser.saveBooking(book);
    return "Successfully Saved";
}
   
    
    @PutMapping("/updatebooking")
    public String updateBookingDetails(@RequestBody Book book, @RequestParam long id) {
         book.setId(id);
         bookingser.updateBooking(book);
         return "Successfully Updated";
    }

    
    @DeleteMapping("/deletebooking")
    public String deleteBookingDetails(@RequestParam long id) {
        bookingser.deleteBooking(id);
        return "Successfully deleted";
    }
}
