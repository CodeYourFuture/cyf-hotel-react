import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [profile, setProfile] = useState([]);
  const { id, email, vip, phoneNumber } = profile;

  useEffect(() => {
    let url = `https://cyf-react.glitch.me/customers/${props}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setProfile(data);
      });
  }, [props]);

  return profile ? (
    <div>
      <h3>Customer {id} Profile</h3>
      <ul>
        <li>e-mail: {email} </li>
        <li>VIP Status: {vip} </li>
        <li>Contact Number: {phoneNumber} </li>
      </ul>
    </div>
  ) : null;
};

export default CustomerProfile;
