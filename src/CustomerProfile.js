import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [profile, setProfile] = useState("");
  console.log(id);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => {
        setProfile(data);
      });
  }, [id]);
  return (
    <div className="customer-profile">
      <p>Customer Id: {profile.id}</p>
      <p>Customer Email: {profile.email}</p>
      <p>VIP: {profile.vip ? "yes" : "No"}</p>
      <p>Customer Phone Number: {profile.phoneNumber}</p>
    </div>
  );
};

export default CustomerProfile;
