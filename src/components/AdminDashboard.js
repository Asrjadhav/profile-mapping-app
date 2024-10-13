// src/components/AdminDashboard.js
import React, { useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = ({ profiles, addProfile, editProfile, deleteProfile }) => {
  const [newProfile, setNewProfile] = useState({ name: '', photo: '', description: '', address: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProfile(newProfile);
    setNewProfile({ name: '', photo: '', description: '', address: '' });
  };

  return (
    <div>
      <h2>Admin Dashboard - Manage Profiles</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={newProfile.name}
          onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={newProfile.photo}
          onChange={(e) => setNewProfile({ ...newProfile, photo: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newProfile.description}
          onChange={(e) => setNewProfile({ ...newProfile, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Address"
          value={newProfile.address}
          onChange={(e) => setNewProfile({ ...newProfile, address: e.target.value })}
        />
        <button type="submit">Add Profile</button>
      </form>

      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            {profile.name}
            <button onClick={() => editProfile(profile.id)}>Edit</button>
            <button onClick={() => deleteProfile(profile.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;