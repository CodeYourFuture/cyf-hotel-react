import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [customerProfileData, setCustomerProfileData] = useState("");

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => setCustomerProfileData(data));
  }, [props.id]);

  return (
    <div className="customer-profile-container">
      <h3>Customer Profile</h3>
      <span>Customer ID: {customerProfileData.id}</span>
      <span>
        Customer Name: {customerProfileData.title}{" "}
        {customerProfileData.firstName} {customerProfileData.surname}
      </span>
      <span>Customer Email: {customerProfileData.email}</span>
      <span>Customer Phone Number: {customerProfileData.phoneNumber}</span>
      <span>VIP : {customerProfileData.vip ? "Yes" : "No"}</span>
    </div>
  );
};

export default CustomerProfile;
