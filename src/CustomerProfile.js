import React, { useState, useEffect } from "react";

const CustomerProfile = ({ custId }) => {
  let [profile, setProfile] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${custId}`)
      .then(response => response.json())
      .then(data => setProfile(data))
      .catch(err => console.error(err));
  }, [custId]);
  return (
    <ul>
      <li> {profile.id} </li>
      <li> {profile.firstName}</li>
      <li> {profile.surname}</li>
      <li> {profile.email}</li>
      <li> {profile.vip ? "Yes" : "No"}</li>
      <li> {profile.phoneNumber}</li>
    </ul>
  );
};

export default CustomerProfile;
