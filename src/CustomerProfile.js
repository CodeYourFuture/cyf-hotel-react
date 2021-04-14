import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [customer, setCustomer] = useState();

  useEffect(() => {
    if (props.id === "") {
      return;
    }
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        setCustomer(data);
      });
  }, [props.id]);

  return customer ? (
    <div id="customer-info-container">
      <h3>Customer {props.id} Profile</h3>
      <ul id="customer-info">
        <li>{customer.email}</li>
        <li>{customer.phoneNumber}</li>
        {customer.vip && <li>VIP</li>}
      </ul>
    </div>
  ) : null;
};

export default CustomerProfile;
