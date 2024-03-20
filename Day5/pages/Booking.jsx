import React, { useState } from 'react';
import '../assets/css/Booking.css'; // Import your CSS file
import Nav from './Nav'; // Import your navigation component
import Footer from './Footer'; // Import your footer component

const BookingPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedCabin, setSelectedCabin] = useState('');
  const [passengers, setPassengers] = useState('');

  const handleBooking = () => {
    if (name.trim() === '' || age === '' || selectedDate === '' || selectedCabin === '' || passengers === '') {
      alert('Please fill in all the details.');
      return;
    }

    alert('Booking confirmed!');
  };

  const calculatePrice = () => {
    let price = 0;

    switch (selectedDate) {
      case 'Apr 10, 2024 to Apr 18, 2024':
        switch (selectedCabin) {
          case 'Interior Stateroom':
            price = 40358;
            break;
          case 'Balcony Stateroom':
            price = 70537;
            break;
          case 'Suite':
            price = 100895;
            break;
          case 'Luxury Suite':
            price = 161432;
            break;
          default:
            break;
        }
        break;
      case 'Apr 20, 2024 to Apr 27, 2024':
        switch (selectedCabin) {
          case 'Interior Stateroom':
            price = 46782;
            break;
          case 'Balcony Stateroom':
            price = 87564;
            break;
          case 'Suite':
            price = 116955;
            break;
          case 'Luxury Suite':
            price = 187128;
            break;
          default:
            break;
        }
        break;
      case 'May 1, 2024 to May 7, 2024':
        switch (selectedCabin) {
          case 'Interior Stateroom':
            price = 37850;
            break;
          case 'Balcony Stateroom':
            price = 59775;
            break;
          case 'Suite':
            price = 94625;
            break;
          case 'Luxury Suite':
            price = 151400;
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
    const totalPrice = price * passengers;
    return totalPrice;
  };

  return (
    <div className="booking-page" style={{ backgroundImage: `url('https://oceana.org/wp-content/uploads/sites/18/2023/07/shutterstock_2312755229.jpg')` }}>
      <Nav />
      <div className="booking-container">
        <div className="booking-details">
          <h2>Booking Details</h2>
          <div className="input-group">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Your Age" />
          </div>
          <div className="input-group">
            <select value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}>
              <option value="">Choose Date</option>
              <option value="Apr 10, 2024 to Apr 18, 2024">Apr 10, 2024 - Apr 18, 2024</option>
              <option value="Apr 20, 2024 to Apr 27, 2024">Apr 20, 2024 - Apr 27, 2024</option>
              <option value="May 1, 2024 to May 7, 2024">May 1, 2024 - May 7, 2024</option>
            </select>
            <select value={selectedCabin} onChange={(e) => setSelectedCabin(e.target.value)}>
              <option value="">Select Cabin</option>
              <option value="Interior Stateroom">Interior Stateroom</option>
              <option value="Balcony Stateroom">Balcony Stateroom</option>
              <option value="Suite">Suite</option>
              <option value="Luxury Suite">Luxury Suite</option>
            </select>
          </div>
          <div className="input-group">
            <input type="number" value={passengers} onChange={(e) => setPassengers(e.target.value)} placeholder="Number of Passengers" />
          </div>
          <div className="total-price">
            <label>Total Price:</label>
            <span>{`₹${calculatePrice()}`}</span>
          </div>
          <div className="selected-info">
            <p20>Selected Date: {selectedDate}</p20>
            <p>Selected Cabin: {selectedCabin}</p>
          </div>
          <button className="button" onClick={handleBooking}>Book Now</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
