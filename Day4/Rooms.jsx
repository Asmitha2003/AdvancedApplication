import React, { useState } from 'react';
import '../assets/css/Rooms.css'; // Import the CSS file
import Cabins from './Cabins';
import Cabins2 from './Cabins2';
import Cabins3 from './Cabins3';
import Cabins4 from './Cabins4';
import Nav from './Nav';
import Footer from './Footer'; // Import the Nav component

const StateroomPage = () => {
  const [selectedStateroom, setSelectedStateroom] = useState('InteriorStateroom');

  const renderSelectedStateroom = () => {
    switch (selectedStateroom) {
      case 'InteriorStateroom':
        return <Cabins />;
      case 'BalconyStateroom':
        return <Cabins2 />;
      case 'Suite':
        return <Cabins3 />;
      case 'LuxurySuite':
        return <Cabins4 />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Nav /> {/* Include the Nav component here */}
      <div className="stateroom-buttons">
        <button className="stateroom-button" onClick={() => setSelectedStateroom('InteriorStateroom')}>Interior Stateroom</button>
        <button className="stateroom-button" onClick={() => setSelectedStateroom('BalconyStateroom')}>Balcony Stateroom</button>
        <button className="stateroom-button" onClick={() => setSelectedStateroom('Suite')}>Suite</button>
        <button className="stateroom-button" onClick={() => setSelectedStateroom('LuxurySuite')}>Luxury Suite</button>
      </div>
      {renderSelectedStateroom()}
    </div>
  );
};

export default StateroomPage;
