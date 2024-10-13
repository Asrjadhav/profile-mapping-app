// src/components/ProfileDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import "./ProfileDetails.css";

const ProfileDetails = ({ profiles }) => {
  const { id } = useParams();
  const profile = profiles.find((p) => p.id === parseInt(id));

  if (!profile) return <h2>Profile not found</h2>;

  return (
    <div className="profile-details-container">
      <h2>{profile.name}</h2>
      <img
        src={
          profile.photo ||
          "https://static.vecteezy.com/system/resources/previews/038/974/578/non_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg"
        }
        alt={profile.name}
      />{" "}
      <p>{profile.description || "No description available."}</p>
      <p>{profile.address.fullAddress || "No address available."}</p>{" "}
      <p>More details about this person...</p>
    </div>
  );
};

export default ProfileDetails;