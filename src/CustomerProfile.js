import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [customerProfile, setCustomerProfile] = useState({});
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => setCustomerProfile(data));
  }, [id]);
  return (
    <ul className="card">
      <li>Customer ID: {id}</li>
      <li>Email: {customerProfile.email}</li>
      {customerProfile.vip && <li>Customer VIP</li>}
      <li>Tel: {customerProfile.phoneNumber}</li>
    </ul>
  );
};

export default CustomerProfile;
