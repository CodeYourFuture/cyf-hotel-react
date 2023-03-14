import React, { useState, useEffect } from "react";

const CustomerProfile = ({ customerId }) => {
  const [customerData, setCustomerData] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${customerId}`)
      .then((response) => response.json())
      .then((data) => setCustomerData(data))
      .catch((error) => console.log(error));
  }, [customerId]);

  if (!customerData) {
    return <p>Loading customer data...</p>;
  }

  return (
    <div className="customer-profile">
      <h3>Customer {customerData.id}</h3>
      <ul>
        <li>Email: {customerData.email}</li>

        <li>Phone: {customerData.phoneNumber}</li>
        <li>VIP: {customerData.vip ? "Yes" : "No"}</li>
      </ul>
    </div>
  );
};

export default CustomerProfile;
