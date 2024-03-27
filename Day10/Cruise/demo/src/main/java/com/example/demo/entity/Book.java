package com.example.demo.entity;

import com.example.demo.entity.enumerate.BookingDate;
import com.example.demo.entity.enumerate.CabinType;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String mail;
    @Enumerated(EnumType.STRING)
    private BookingDate selectedDate;
    @Enumerated(EnumType.STRING)
    private CabinType selectedCabin;
    private int passengers;

    // @Column(name = "total_price")
    // private int totalPrice;

    // // Calculate totalPrice before saving or updating
    // public void calculateTotalPrice() {
    //     int price = 0;

    //     switch (selectedDate) {
    //         case CHENNAI_GOA_CHENNAI:
    //             switch (selectedCabin) {
    //                 case INTERIOR_STATEROOM:
    //                     price = 40358;
    //                     break;
    //                 case BALCONY_STATEROOM:
    //                     price = 70537;
    //                     break;
    //                 case SUITE:
    //                     price = 100895;
    //                     break;
    //                 case LUXURY_SUITE:
    //                     price = 161432;
    //                     break;
    //             }
    //             break;
    //         case MUMBAI_GOA_MUMBAI:
    //             switch (selectedCabin) {
    //                 case INTERIOR_STATEROOM:
    //                     price = 46782;
    //                     break;
    //                 case BALCONY_STATEROOM:
    //                     price = 87564;
    //                     break;
    //                 case SUITE:
    //                     price = 116955;
    //                     break;
    //                 case LUXURY_SUITE:
    //                     price = 187128;
    //                     break;
    //             }
    //             break;
    //         case COCHIN_LAKSHADWEEP_COCHIN:
    //             switch (selectedCabin) {
    //                 case INTERIOR_STATEROOM:
    //                     price = 37850;
    //                     break;
    //                 case BALCONY_STATEROOM:
    //                     price = 59775;
    //                     break;
    //                 case SUITE:
    //                     price = 94625;
    //                     break;
    //                 case LUXURY_SUITE:
    //                     price = 151400;
    //                     break;
    //             }
    //             break;
    //     }

    //     this.totalPrice = price * passengers;
    // }
}
