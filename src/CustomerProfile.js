import React, { useState, useEffect } from "react";

const CustomerProfile = ({ customerId }) => {
  const [customerData, setData] = useState({});
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${customerId}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [customerId]);
  return (
    <div>
      <p>{customerData.id}</p>
      <p>{customerData.title}</p>
      <p>{customerData.firstName}</p>
      <p>{customerData.surname}</p>
      <p>{customerData.email}</p>
      <p>{customerData.phoneNumber}</p>
    </div>
  );
};

export default CustomerProfile;
