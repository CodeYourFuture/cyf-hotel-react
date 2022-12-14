import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [customerProfile, setCustomerProfile] = useState({});
  useEffect(() => {
    fetch("https://cyf-react.glitch.me/customers/" + id)
      .then(response => response.json())
      .then(data => setCustomerProfile(data));
  }, [id]);

  return (
    <ul>
      <li>Customer ID: {id}</li>
      <li>Email: {customerProfile.email}</li>
      {customerProfile.vip && <li>VIP Customer</li>}
      <li>Phone Number: {customerProfile.phoneNumber}</li>
    </ul>
  );
};

export default CustomerProfile;
