import React, { useState, useRef, useEffect } from 'react';
import '../assets/css/Cabins.css';
import bed from '../assets/images/bed.png';
import closet from "../assets/images/closet.png";
import tv from '../assets/images/television.png';
import bath from '../assets/images/toilet-paper.png';
import hair from '../assets/images/hairdryer.png';
import bot from '../assets/images/water-bottle.png';
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
    <div className="cabcontainer">
      <div className="cabimageContainer">
        <img src="https://cruise.blog/sites/default/files/2021-08/1920x1080_nclblissstudio.jpg" className="regImage" />
        <div className="cab1con">
          <h3>Interior Stateroom</h3>
          <p3>A basic cabin located in the interior of the ship, without <br />windows or natural light.</p3>
        </div>
      
        <div className="caboverlay">
  <button className="viewAllButton" onClick={toggleImagesPopup}>View All</button>
  <button className="bookNowButton"><Link to="/booking">Book Now</Link></button>
</div>
      </div>
      <div className="amenitiesListContainer">
        <h4>Room Amenities</h4>
        <ul className="amenitiesList">
          <li><img src={bed}/> Twin Beds</li>
          <li><img src={closet}/> Under-Bed Storage</li>
          <li><img src={tv}/> Flat-Screen Televisions</li>
          <li><img src={bath} /> Private Bathroom</li>
          <li><img src={hair} /> Hairdryer</li>
          <li><img src={bot}/>2 Water Bottles</li>
        </ul>
      </div>
      {showImagesPopup && (
        <div ref={imagesPopupRef} className="imagesPopup">
          <i className="closeButton" onClick={toggleImagesPopup}></i>
          <img src="https://www.cruzely.com/wp-content/uploads/interior-cabin-view.jpg" alt="Image 1" />
          <img src="https://cruise.blog/sites/default/files/inline-images/an-w-interior-10230-living.jpg" alt="Image 2" />
          <img src="https://emmacruises.com/wp-content/uploads/2019/09/IMG_20190901_134926-1024x655.jpg" alt="Image 3" />
          <img src="https://blog.paramountcruises.com/wp-content/uploads/2021/06/Inside-Cabin.jpg" alt="Image 3" />
        </div>
      )}
    </div>
  );
};

export default Page;
