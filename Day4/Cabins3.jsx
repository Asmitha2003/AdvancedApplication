import React, { useState, useRef, useEffect } from 'react';
import '../assets/css/Cabins3.css';
import bed from '../assets/images/bed.png';
import closet from "../assets/images/closet.png";
import dine from '../assets/images/outside.png';
import bath from '../assets/images/toilet-paper.png';
import bar from '../assets/images/bar-counter.png';
import cupboard from '../assets/images/cupboard.png';

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
    <div className="cab3container">
      <div className="cab3imageContainer">
        <img src="https://thepointsguy.freetls.fastly.net/us/originals/2022/04/Celebrity-Cruises-Sky-Suites-2.jpg" className="reg3Image" />
        <div className="cab3con">
          <h3>Suite</h3>
          <p8> A larger and more luxurious accommodation with separate living and sleeping areas, often including premium amenities and services.</p8>
        </div>
        <div className="cab3overlay">
          <button className="viewAllButton3" onClick={toggleImagesPopup}>View All</button>
        </div>
      </div>
      <div className="amenitiesListContainer3">
        <h4>Room Amenities</h4>
        <ul className="amenitiesList3">
          <li><img src={closet}/> Spacious Accommodation</li>
          <li><img src={bed}/> King-sized bed(s)</li>
          <li><img src={bath} /> Luxury Bathroom with Luxury Toiletries</li>
          <li><img src={dine} /> Dining Area</li>
          <li><img src={cupboard}/>Walk-In Closet</li>
          <li><img src={bar}/>Mini-Bar</li>
          
        </ul>
      </div>
      {showImagesPopup && (
        <div ref={imagesPopupRef} className="imagesPopup3">
          <i className="closeButton3" onClick={toggleImagesPopup}></i>
          <img src="https://thepointsguy.global.ssl.fastly.net/us/originals/2020/02/RSSC_Splendor_RegentSuite_Bedroom_3716.jpg" alt="Image 1" />
          <img src="https://s3.amazonaws.com/a-us.storyblok.com/f/1005231/3643c0f8a0/celebrity-edge_suite_celebrity-cruises_epp_136722.jpg" alt="Image 2" />
          <img src="https://thepointsguy.global.ssl.fastly.net/us/originals/2020/02/RSSC_Splendor_RegentSuite_Bedroom_3716.jpg" alt="Image 3" />
          <img src="https://blogs-images.forbes.com/douggollan/files/2018/05/Screen-Shot-2018-05-05-at-5.44.20-PM.png" alt="Image 3" />
        </div>
      )}
    </div>
  );
};

export default Page;
