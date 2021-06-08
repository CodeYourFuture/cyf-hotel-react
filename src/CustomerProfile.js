import React, { useEffect, useState } from "react";

const CustomerProfile = ({ customerId }) => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${customerId}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProfile(data);
      });
  }, [customerId]);
  return (
    <div>
      <p>Customer profile {customerId} selected</p>
      <p>Customer email {profile.email}</p>
      <p>{profile.vip && "vip"}</p>
      <p>Customer phoneNumber {profile.phoneNumber}</p>
    </div>
  );
};

export default CustomerProfile;
