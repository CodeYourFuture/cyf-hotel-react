import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [customerDetails, setCustomerDetails] = useState({});
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(setCustomerDetails)
      .catch(console.error);
  }, [id]);
  return (
    <>
      <p> Customer ID {customerDetails.id}</p>
      <p> Email {customerDetails.email}</p>
      <p> Phone {customerDetails.phoneNumber}</p>
      <p> Client is {customerDetails.vip ? "VIP" : "Not VIP"}</p>
    </>
  );
};

export default CustomerProfile;
