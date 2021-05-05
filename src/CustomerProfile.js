import React, { useEffect, useState } from "react";

const CustomerProfile = ({ customerId }) => {
  const [customerInfo, setCustomerInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${customerId}`)
      .then(response => response.json())
      .then(info => {
        setCustomerInfo(info);
      });
  }, [customerId]);

  return customerInfo ? (
    <ul className="customer-profile">
      <li>Customer: {customerId}</li>
      <li>Email: {customerInfo.email}</li>
      {customerInfo.vip ? <li class="vip">VIP</li> : null}
      <li>Phone number: {customerInfo.phoneNumber}</li>
    </ul>
  ) : null;
};

export default CustomerProfile;
