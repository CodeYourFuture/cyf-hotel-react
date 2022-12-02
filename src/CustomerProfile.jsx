import React, { useEffect, useState } from "react";

function CustomerProfile(props) {
  const [customerProfile, setCustomerProfile] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        setCustomerProfile(data);
      });
  }, [props.id]);
  return (
    <div className="customer-profile">
      <h3>Customer {props.id} Profile</h3>
      <li>
        <strong>Customer ID :</strong> {customerProfile.id}
      </li>
      <li>
        <strong>Email :</strong> {customerProfile.email}
      </li>
      <li>
        <strong>VIP :</strong> {customerProfile.vip ? "Yes" : "No"}
      </li>
      <li>
        <strong>Phone Number :</strong> {customerProfile.phoneNumber}
      </li>
    </div>
  );
}

export default CustomerProfile;
