// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfileList from "./components/ProfileList";
import ProfileDetails from "./components/ProfileDetails";
import AdminDashboard from "./components/AdminDashboard";
import "./App.css";

const App = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Sandra Diaz",
      photo:
        "https://img.freepik.com/premium-photo/headshot-photos-indian-women-dynamic-professions-occassions-indian-girl_978786-285.jpg", // Updated path for correct image location
      description: "A brief description.",
      address: { lat: 40.7128, lng: -74.006, fullAddress: "New York, NY" },
    },
    {
      id: 2,
      name: "Stieve Depp",
      photo:
        "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png", // Updated path for correct image location
      description: "Another description.",
      address: { lat: 34.0522, lng: -118.2437, fullAddress: "Los Angeles, CA" },
    },
  ]);

  const handleShowMap = (address) => {
    alert(`Show map for address: ${address.fullAddress}`);
  };

  const addProfile = (profile) =>
    setProfiles([...profiles, { id: profiles.length + 1, ...profile }]);
  const editProfile = (id) => console.log("Editing profile", id);
  const deleteProfile = (id) =>
    setProfiles(profiles.filter((profile) => profile.id !== id));

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <ProfileList profiles={profiles} handleShowMap={handleShowMap} />
            }
          />
          <Route
            path="/profiles/:id"
            element={<ProfileDetails profiles={profiles} />}
          />
          <Route
            path="/admin"
            element={
              <AdminDashboard
                profiles={profiles}
                addProfile={addProfile}
                editProfile={editProfile}
                deleteProfile={deleteProfile}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;