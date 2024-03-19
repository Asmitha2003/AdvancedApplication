import React, { useState, useRef, useEffect } from 'react';
import '../assets/css/Cabins2.css';
import bed from '../assets/images/bed.png';
import closet from "../assets/images/patio.png";
import house from '../assets/images/housekeeper.png';
import bath from '../assets/images/toilet-paper.png';
import hair from '../assets/images/hairdryer.png';
import mini from '../assets/images/mini.png';

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
    <div className="cab2container">
      <div className="cab2imageContainer">
        <img src="https://www.discoveryholidays.co.in/wp-content/uploads/2017/04/image006.jpg" className="reg2Image" />
        <div className="cab2con">
          <h3>Balcony Stateroom</h3>
          <p7> A cabin with a private balcony, allowing guests<br></br> to enjoy fresh air and panoramic views.</p7>
        </div>
        <div className="cab2overlay">
          <button className="viewAllButton" onClick={toggleImagesPopup}>View All</button>
        </div>
      </div>
      <div className="amenitiesListContainer2">
        <h4>Room Amenities</h4>
        <ul className="amenitiesList2">
          <li><img src={closet}/> Private Balcony</li>
          <li><img src={bed}/> Queen-sized bed</li>
          <li><img src={bath} /> Private Bathroom with Toiletries</li>
          <li><img src={hair} /> Hairdryer</li>
          <li><img src={house}/>Daily Housekeeping</li>
          <li><img src={mini}/>Mini-Refrigerator</li>
          
        </ul>
      </div>
      {showImagesPopup && (
        <div ref={imagesPopupRef} className="imagesPopup2">
          <i className="closeButton2" onClick={toggleImagesPopup}></i>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa0n4GOybpuGpVbHIQXzu7cUNxZcaRP3tBTeEq3RdjNmdKnCl2XVaTbxiaS_QpuldOipU&usqp=CAU" alt="Image 1" />
          <img src="https://discoverkl.com/wp-content/uploads/sites/20/2019/03/Untitled-design-42-1024x768.jpg" alt="Image 2" />
          <img src="https://milelion-com0.exactdn.com/wp-content/uploads/2021/03/Pasted-into-dream-cruise-stateroom-2.jpg?strip=all&lossy=1&resize=696%2C522&ssl=1" alt="Image 3" />
          <img src="https://sethlui.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-03-at-12.10.14-AM-749x600.jpeg" alt="Image 3" />
        </div>
      )}
    </div>
  );
};

export default Page;
