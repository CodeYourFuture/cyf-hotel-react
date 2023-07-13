import React, { useEffect, useState } from "react";

const CustomerProfile = ({ customerId }) => {
  const [customerProfile, setCustomerProfile] = useState(null);

  useEffect(() => {
    if (customerId) {
      fetch(`https://cyf-react.glitch.me/customers/${customerId}`)
        .then((response) => response.json())
        .then((data) => {
          setCustomerProfile(data);
        });
    }
  }, [customerId]);

  if (!customerProfile) {
    return null;
  }

  return (
    <div className="customer-profile">
      <h2>Customer Profile</h2>
      <ul>
        <li>ID: {customerProfile.id}</li>
        <li>Email: {customerProfile.email}</li>
        <li>VIP: {customerProfile.vip ? "Yes" : "No"}</li>
        <li>Phone: {customerProfile.phoneNumber}</li>
      </ul>
    </div>
  );
};

export default CustomerProfile;
