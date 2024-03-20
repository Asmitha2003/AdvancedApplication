import React, { useState } from 'react';
import AdminDashboard from './AdminDashboard'; // Import the AdminDashboard component
import "../assets/css/Edit.css";

const CabinEditing = () => {
  const [cabins, setCabins] = useState([
    { id: 1, name: "Interior Stateroom", amenities: ["Twin Beds", "Under-Bed Storage", "Flat-Screen Televisions", "Private Bathroom", "Hairdryer", "Water Bottles"] },
    { id: 2, name: "Balcony Stateroom", amenities: ["Private Balcony", "Queen-sized bed", "Private Bathroom with Toiletries", "Hairdryer", "Daily Housekeeping", "Mini-Refrigerator"] },
    { id: 3, name: "Suite", amenities: ["King-sized bed", "Separate Living Area", "Private Bathroom with Whirlpool Tub", "Private Balcony", "Butler Service", "Concierge Service"] },
    { id: 4, name: "Luxury Suite", amenities: ["Spacious Living Area", "Private Pool", "Personal Chef", "24/7 Butler Service", "Private Helicopter Transfer"] },
  ]);
  const [newCabinName, setNewCabinName] = useState("");
  const [newAmenity, setNewAmenity] = useState("");
  const [editedAmenity, setEditedAmenity] = useState("");
  const [editedCabinName, setEditedCabinName] = useState("");

  // Function to add a new cabin
  const addCabin = () => {
    const newCabin = {
      id: Date.now(), // Generate a unique ID
      name: newCabinName,
      amenities: []
    };
    setCabins([...cabins, newCabin]);
    setNewCabinName("");
  };

  // Function to delete a cabin
  const deleteCabin = (cabinId) => {
    const updatedCabins = cabins.filter(cabin => cabin.id !== cabinId);
    setCabins(updatedCabins);
  };

  // Function to add an amenity to a cabin
  const addAmenity = (cabinId) => {
    const updatedCabins = cabins.map(cabin => {
      if (cabin.id === cabinId) {
        return { ...cabin, amenities: [...cabin.amenities, newAmenity] };
      }
      return cabin;
    });
    setCabins(updatedCabins);
    setNewAmenity("");
  };

  // Function to delete an amenity from a cabin
  const deleteAmenity = (cabinId, amenityIndex) => {
    const updatedCabins = cabins.map(cabin => {
      if (cabin.id === cabinId) {
        const updatedAmenities = cabin.amenities.filter((_, index) => index !== amenityIndex);
        return { ...cabin, amenities: updatedAmenities };
      }
      return cabin;
    });
    setCabins(updatedCabins);
  };

  // Function to edit cabin name
  const editCabinName = (cabinId, newName) => {
    const updatedCabins = cabins.map(cabin => {
      if (cabin.id === cabinId) {
        return { ...cabin, name: newName };
      }
      return cabin;
    });
    setCabins(updatedCabins);
    // Reset editedCabinName after updating the state
    setEditedCabinName("");
  };

  // Function to edit an amenity in a cabin
  const editAmenity = (cabinId, amenityIndex, newAmenity) => {
    const updatedCabins = cabins.map(cabin => {
      if (cabin.id === cabinId) {
        const updatedAmenities = cabin.amenities.map((amenity, index) => {
          if (index === amenityIndex) {
            return newAmenity;
          }
          return amenity;
        });
        return { ...cabin, amenities: updatedAmenities };
      }
      return cabin;
    });
    setCabins(updatedCabins);
    // Reset editedAmenity after updating the state
    setEditedAmenity("");
  };

  return (
    <div>
      <div className="grey-layout"></div>
      <AdminDashboard />
      <div className="cabin-editing-container-custom">
        {/* Cabin Editing content */}
        {cabins.map(cabin => (
          <div className="cabin-custom" key={cabin.id}>
            <h2 className="cabin-title-custom">{cabin.name}</h2>
            {/* Display amenities */}
            <ul className="amenities-list-custom">
              {cabin.amenities.map((amenity, index) => (
                <li key={index}>
                  {amenity}
                  <span className="link" onClick={() => deleteAmenity(cabin.id, index)}>Delete</span>
                  <span className="link" onClick={() => {
                    const editedValue = prompt("Enter edited amenity:");
                    if (editedValue !== null) {
                      editAmenity(cabin.id, index, editedValue);
                    }
                  }}>Edit</span>
                </li>
              ))}
            </ul>
            {/* Add amenity form */}
            <form className="add-amenity-form-custom" onSubmit={(e) => {
              e.preventDefault();
              addAmenity(cabin.id);
            }}>
              <input
                type="text"
                value={newAmenity}
                onChange={(e) => setNewAmenity(e.target.value)}
                placeholder="Enter amenity"
              />
              <button className="add-amenity-button-custom" type="submit">Add Amenity</button>
            </form>
            <span className="link" onClick={() => deleteCabin(cabin.id)}>Delete Cabin</span>
            <span className="link" onClick={() => {
              const editedValue = prompt("Enter edited cabin name:");
              if (editedValue !== null) {
                editCabinName(cabin.id, editedValue);
              }
            }}>Edit Cabin</span>
          </div>
        ))}
        {/* Add Cabin Form */}
        <form className="add-cabin-form-custom last-form-custom" onSubmit={(e) => {
          e.preventDefault();
          addCabin();
        }}>
          <input
            type="text"
            value={newCabinName}
            onChange={(e) => setNewCabinName(e.target.value)}
            placeholder="Enter cabin name"
          />
          <button className="add-cabin-button-custom" type="submit">Add Cabin</button>
        </form>
      </div>
    </div> 
  );
};

export default CabinEditing;
