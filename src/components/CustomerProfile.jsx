/*
This is how we'd like to display the customer's profile:

    "id": 1,
    "email": "johndoe@doe.com",
    "vip": true,
    "phoneNumber": "+44 1632 960185"

*/

import React, { useState, useEffect } from "react";
import "./CustomerProfile.css";

const CustomerProfile = ({ id }) => {
  const [customerProfile, setCustomerProfile] = useState({});

  useEffect(() => {
    console.log(id);
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then((res) => res.json())
      .then((data) => setCustomerProfile(data));
  }, [id]);

  return (
    <div className="profile-container">
      <p>Customer Profile: </p>
      <ul className="profile-list">
        <li>ID: {customerProfile.id}</li>
        <li>Email: {customerProfile.email}</li>
        <li>VIP: {customerProfile.vip?.toString()}</li>
        <li>Phone number: {customerProfile.phoneNumber}</li>
      </ul>
    </div>
  );
};

export default CustomerProfile;

