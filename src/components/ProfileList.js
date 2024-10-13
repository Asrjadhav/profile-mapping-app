// src/components/ProfileList.js
import React, { useState } from 'react';
import MapCompo from './MapCompo';
import { Link } from 'react-router-dom';
import './ProfileList.css';

const ProfileList = ({ profiles }) => {
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleShowMap = (profile) => {
    console.log("Profile clicked:", profile); 
    setSelectedAddress({
      lat: profile.address.lat,
      lng: profile.address.lng,
      fullAddress: profile.address.fullAddress
    });
  };

  return (
    <div className="profile-list-container">
      {profiles.map((profile) => (
        <div key={profile.id} className="profile-card">
          <h3 className="profile-name">{profile.name}</h3>
          <button className="show-map-button" onClick={() => handleShowMap(profile)}>
            Show on Map
          </button>
          <Link to={`/profiles/${profile.id}`} className="view-details-link">
            View Details
          </Link>
        </div>
      ))}
      {selectedAddress && <MapCompo address={selectedAddress} />}
    </div>
  );
};

export default ProfileList;