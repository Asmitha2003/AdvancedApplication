import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';  
import '../assets/css/ProfilePage.css';
import { FaEdit, FaCheck } from 'react-icons/fa'; // Import the edit and check icons from react-icons

const ProfilePage = () => {
  const initialUserInfo = {
    name: "Asmitha",
    email: "asd23@gmail.com",
    age: 20,
    cruiseBooked: "Apr 10, 2024 to Apr 18, 2024",
    cabinBooked: "Luxury Suite",
    numPassengers: 1,
    totalPrice: 161432
  };
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [isEditing, setIsEditing] = useState(false); // State to manage editing mode

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEdit = () => {
    if (isEditing) {
      // Here you can add additional logic if needed
      setIsEditing(false);
      // Here you can send the updated userInfo to the server or perform any other action
      console.log("Updated user info:", userInfo);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <div>
      <Nav />
      <div className="profile-page">
        <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Female-PNG-Image.png" alt="Profile" className="profile-picture" />

        <div className="profile-header">
          <h1>Welcome, {userInfo.name}!</h1>
          <p>View your cruise booking details below:</p>
        </div>
        <div className="profile-info">
          <div className="info-item">
            <span className="info-label">Name:</span> 
            {isEditing ? (
              <input type="text" name="name" value={userInfo.name} onChange={handleInputChange} /> 
            ) : (
              <span>{userInfo.name}</span>
            )}
          </div>
          <div className="info-item">
            <span className="info-label">Email:</span> 
            {isEditing ? (
              <input type="email" name="email" value={userInfo.email} onChange={handleInputChange} /> 
            ) : (
              <span>{userInfo.email}</span>
            )}
          </div>
          <div className="info-item">
            <span className="info-label">Age:</span> 
            {isEditing ? (
              <input type="number" name="age" value={userInfo.age} onChange={handleInputChange} /> 
            ) : (
              <span>{userInfo.age}</span>
            )}
          </div>
          <div className="info-item">
            <span className="info-label">Cruise Booked:</span> {userInfo.cruiseBooked}
          </div>
          <div className="info-item">
            <span className="info-label">Cabin Booked:</span> {userInfo.cabinBooked}
          </div>
          <div className="info-item">
            <span className="info-label">Number of Passengers:</span> {userInfo.numPassengers}
          </div>
          <div className="info-item">
            <span className="info-label">Total Price:</span> Rs.{userInfo.totalPrice}
          </div>
          <div className="info-item">
            {isEditing ? (
              <FaCheck className="edit-icon" onClick={handleEdit} /> 
            ) : (
              <FaEdit className="edit-icon" onClick={handleEdit} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
