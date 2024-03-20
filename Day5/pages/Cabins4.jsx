import React, { useState, useRef, useEffect } from 'react';
import '../assets/css/Cabins4.css';
import bed from '../assets/images/bed.png';
import closet from "../assets/images/patio.png";
import dine from '../assets/images/outside.png';
import bar from '../assets/images/bar-counter.png';
import waiter from '../assets/images/waiter.png';
import vip from '../assets/images/vip.png';
import { Link } from 'react-router-dom';

const Page = () => {
  const [showImagesPopup, setShowImagesPopup] = useState(false);
  const imagesPopupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (imagesPopupRef.current && !imagesPopupRef.current.contains(event.target)) {
        setShowImagesPopup(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleImagesPopup = () => {
    setShowImagesPopup(!showImagesPopup);
  };

  return (
    <div className="cab4container">
      <div className="cab4imageContainer">
        <img src="https://www.cruisebooking.com/Content/site/images/CruiseImages/Articleimages/Carnival_Cruise_Tips/Subcategory/cruise-staterooms-m.webp" className="reg3Image" />
        <div className="cab4con">
          <h3>Luxury Suite</h3>
          <p9> An ultra-luxurious accommodation with extravagant amenities such as butler service, private hot tubs, and gourmet dining options.</p9>
        </div>
        <div className="cab4overlay">
          <button className="viewAllButton3" onClick={toggleImagesPopup}>View All</button>
          <button className="bookNowButton"><Link to="/booking">Book Now</Link></button>
        </div>
      </div>
      <div className="amenitiesListContainer4">
        <h4>Room Amenities</h4>
        <ul className="amenitiesList4">
          <li><img src={closet}/> Private Balcony or Terrace</li>
          <li><img src={bed}/> Luxurious Bedding</li>
          <li><img src={dine} />Elegant Living Area and Dining Area</li>
          <li><img src={vip}/>VIP Treatment</li>
          <li><img src={bar}/>Fully Stocked Bar</li>
          <li><img src={waiter}/>Personalized Butler Service</li>

          
        </ul>
      </div>
      {showImagesPopup && (
        <div ref={imagesPopupRef} className="imagesPopup4">
          <i className="closeButton4" onClick={toggleImagesPopup}></i>
          <img src="https://cruiseindustrynews.com/wp-content/uploads/2019/05/Seabourn_expedition_ships_-_Wintergarden_Suite_Living_Room.jpg.webp" alt="Image 1" />
          <img src="https://i0.wp.com/cruise-arabia.com/wp-content/uploads/2018/01/HapagLloyd-Europa2-OwnersSuite.jpg?resize=639%2C442&ssl=1" alt="Image 2" />
          <img src="https://www.travelandleisure.com/thmb/XQAEFJ2teyLqF7EkC8aXkr2FOnE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/seabourn-venture-wintergarden-suite-SEABOURN0722-d9ea1658c88c45e7b4084d66b9254c39.jpg" alt="Image 3" />
          <img src="https://www.sixstarcruises.co.uk/advice/wp-content/uploads/2016/09/21_4_oClass-Owners-Suite-e1473955443790-1024x514-1.jpg" alt="Image 3" />
        </div>
      )}
    </div>
  );
};

export default Page;
