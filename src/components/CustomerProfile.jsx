import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [customerData, setCustomerData] = useState({});
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => setCustomerData(data));
  }, [id]);
  console.log(customerData);
  return (
    <div>
      <p>Customer {id} profile </p>
      <p>id:{customerData.id}</p>
      <p>email:{customerData.email}</p>
      <p>vip:{customerData.vip ? "yes" : "No"}</p>
      <p>phone number:{customerData.phoneNumber}</p>
    </div>
  );
};

export default CustomerProfile;
