import React, { useState, useEffect } from "react";

const CostomerProfile = ({ customerProfile }) => {
  const [profile, setProfile] = useState("");

  useEffect(() => {
    fetch(`https://hotel-server-boshram.glitch.me/bookings/${customerProfile}`)
      .then(res => res.json())
      .then(data => {
        setProfile(data.data);
      });
  }, [customerProfile]);

  return (
    customerProfile && (
      <div className="customer-profile-container">
        <p>Customer Id: {profile.id}</p>
        <p>Customer Email: {profile.email}</p>
        <p>VIP: {profile.vip ? "yes" : "no"}</p>
        <p>Customer Phone Number: {profile.phoneNumber}</p>
      </div>
    )
  );
};

export default CostomerProfile;
