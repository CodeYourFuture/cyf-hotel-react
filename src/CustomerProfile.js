import React from "react";
import { useState, useEffect } from "react";
const CustomerProfile = ({ props }) => {
  const [profile, setProfile] = useState([]);
  const { id, email, vip, phoneNumber } = profile;

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props}`)
      .then(response => response.json())
      .then(data => {
        setProfile(data);
      });
  }, [props]);

  return profile ? (
    <div>
      <p>Customer {id} Profile</p>
      <p>Customer email : {email}</p>
      <p>Customer VIP Status : {vip ? "Yes" : "No"}</p>
      <p>Customer Phone Number : {phoneNumber}</p>
    </div>
  ) : null;
};

export default CustomerProfile;
