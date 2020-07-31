import React, { useEffect, useState } from "react";
import "./CustomerProfile.css";
const CustomerProfile = props => {
  const [ID, setID] = useState({});
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => setID(data))
      .catch(error => error);
  }, [props.id]);

  return (
    <div className="customer-profile">
      <h2>Customer {props.id} Profile</h2>
      <ul>
        <li> Customer ID: {ID.id} </li>
        <li> Email address: {ID.email} </li>
        <li> Is VIP: {ID.vip ? "Yes" : "No"} </li>
        <li> Phone Number: {ID.phoneNumber} </li>
      </ul>
    </div>
  );
};

export default CustomerProfile;
