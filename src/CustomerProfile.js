import React, { useEffect, useState } from "react";

const CustomerProfile = ({ customerId }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${customerId}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProfile(data);
      });
  }, [customerId]);

  return profile ? (
    <>
      <p>Customer {customerId} Profile </p>
      <p> ID: {profile.id} </p>
      <p> Email: {profile.email} </p>
      <p> Phone Number: {profile.phoneNumber} </p>
      <p> {profile.vip && "VIP"} </p>
    </>
  ) : null;
};

export default CustomerProfile;
