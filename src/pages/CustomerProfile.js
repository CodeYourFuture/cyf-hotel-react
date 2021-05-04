import React, { useState, useEffect } from "react";

const CustomerProfile = ({ customerId }) => {
  const [profile, setProfile] = useState("");

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${customerId}`)
      .then(res => res.json())
      .then(data => {
        setProfile(data);
      });
  }, [customerId]);

  return (
    profile && (
      <div>
        <h3>Customer Profile</h3>
        <p>{profile.vip && "VIP Customer"}</p>
        <p>Customer ID: {profile.id}</p>
        <p>Customer email: {profile.email}</p>
        <p>Customer phone number: {profile.phoneNumber}</p>
      </div>
    )
  );
};

export default CustomerProfile;
