import React, { useState, useEffect } from "react";

const CustomerProfile = ({ customerId }) => {
  const [customerData, setCustomerData] = useState(null);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${customerId}`)
      .then(res => res.json())
      .then(data => {
        return setCustomerData(data);
      });

    //.catch((err) => console.log(err));
  }, [customerId]);

  return customerData ? (
    <div>
      <p>Customer {customerId} Profile</p>
      <ul>
        <li>Customer ID :{customerData.id}</li>
        <li>VIP: {customerData.vip ? "Yes" : "No"}</li>
        <li>CUstomer Email: {customerData.email}</li>
        <li>Customer Phone Number: {customerData.phoneNumber}</li>
      </ul>
    </div>
  ) : (
    <p />
  );
};

export default CustomerProfile;
