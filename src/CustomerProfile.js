import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [customer, setCustomer] = useState("");
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.customerId}`)
      .then(res => res.json())
      .then(data => {
        setCustomer(data);
      });
  }, [props.customerId]);
  return (
    customer && (
      <div className=" d-flex-column text-center">
        <h3>Customer's Detail</h3>
        <p className="bg-success">{customer.vip && "VIP Customer"}</p>
        <p>Customer's ID: {customer.id}</p>
        <p>Customer's phone number: {customer.phoneNumber}</p>
        <p>Customer's email: {customer.email}</p>
      </div>
    )
  );
};

export default CustomerProfile;
