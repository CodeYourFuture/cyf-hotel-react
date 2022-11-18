import React, { useState, useEffect } from "react";
// import React from "react";

const CustomerProfile = ({ ids }) => {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    console.log("Fetching data from Customers");

    fetch(`https://cyf-react.glitch.me/customers/${ids}`)
      .then(res => res.json())
      .then(data => {
        setCustomer(data);
      });
  }, [ids]);

  return (
    <div key={ids}>
      <h2>Customer {ids} Profile</h2>
      <p>Customer ID : {customer.id}</p>
      <p>Email : {customer.email}</p>
      <p>Phone Number : {customer.phoneNumber}</p>
      <p>VIP Status : {String(customer.vip)}</p>
    </div>
  );
};

export default CustomerProfile;
