import React, { useState, useEffect } from "react";

const CostomerProfile = ({ customerProfile }) => {
  const [profile, setProfile] = useState("");

  useEffect(() => {
    fetch(
      `https://temporary-cyf-react.onrender.com/delayed/customers/${customerProfile}`
    )
      .then(res => res.json())
      .then(data => {
        setProfile(data);
      });
  }, [customerProfile]);

  return (
    customerProfile && (
      <div>
        <p>Customer Id: {profile.id}</p>
        <p>Customer Email: {profile.email}</p>
        <p>VIP: {profile.vip ? "yes" : "no"}</p>
        <p>Customer Phone Number: {profile.phoneNumber}</p>
      </div>
    )
  );
};

export default CostomerProfile;
