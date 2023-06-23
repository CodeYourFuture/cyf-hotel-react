import React, { useState, useEffect } from "react";
import "./App.css";

function CustomerProfile(props) {
  const [customer, setCustomer] = useState({});
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.customerId}`)
      .then((response) => response.json())
      .then((data) => setCustomer(data));
  }, [props.customerId]);
  return (
    <div className={props.view}>
      <div className="profile-container">
        <p className="profile">{props.customerProfile}</p>
        <p>ID: {props.customerId}</p>
        <p>Email: {customer.email}</p>
        <p>VIP: {customer.vip ? "Yes" : "No"}</p>
        <p>Tel: {customer.phoneNumber}</p>
      </div>
    </div>
  );
}

export default CustomerProfile;
