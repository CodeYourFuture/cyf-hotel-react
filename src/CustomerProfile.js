import React, { useState, useEffect } from "react";
import "./CustomerProfile.css";

const CustomerProfile = ({ id }) => {
  const [customer, setCustomer] = useState({});
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(response => response.json())
      .then(data => setCustomer(data));
  }, [id]);
  return (
    <div>
      <p>Customer {id} profile: </p>
      <ul className="style-ul">
        <li>Customer ID: {customer.id} </li>
        <li> Customer title: {customer.title} </li>
        <li>firstName: {customer.firstName} </li>
        <li>surname: {customer.surname} </li>
        <li>Email address {customer.email} </li>
        <li>Is VIP: {customer.vip ? "Yes" : "No"} </li>
        <li> Phone Number: {customer.phoneNumber} </li>
      </ul>
    </div>
  );
};
export default CustomerProfile;
