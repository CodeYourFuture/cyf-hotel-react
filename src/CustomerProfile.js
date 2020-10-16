import React, { useState, useEffect } from "react";
import "./CustomerProfile.css";

const CustomerProfile = ({ customerID }) => {
  const [customerProfile, setCustomerProfile] = useState(null);
  console.log("CustomerProfile - customerID: ", customerID);

  useEffect(
    _ => {
      fetch(`https://cyf-react.glitch.me/customers/${customerID}`)
        .then(res => res.json())
        .then(data => setCustomerProfile(data));
    },
    [customerID]
  );

  customerID && console.log("CustomerProfile: ", customerProfile);
  return (
    //console.log("customerProfile: ", customerProfile) &&
    //customerProfile ? (

    <div id="customer-profile-container">
      <header id="customer-profile-header">
        {customerID ? (
          <>
            {customerProfile.title}&nbsp;{customerProfile.firstName}&nbsp;
            {customerProfile.surname}
          </>
        ) : (
          <>Customer Profile</>
        )}
      </header>
      {customerID ? (
        <ul id="customer-profile">
          <li>
            <span>Status: </span>
            {customerProfile.vip ? "VIP" : "STANDARD"}
          </li>
          <li>&nbsp;</li>
          <li>
            <span>Email: </span>
            {customerProfile.email}
          </li>
          <li>
            <span>Phone: </span>
            {customerProfile.phoneNumber}
          </li>
          <li> </li>
        </ul>
      ) : (
        <ul id="customer-profile">
          <li>
            <span>Status: </span>
          </li>
          <li>
            <span>&nbsp;</span>
          </li>
          <li>
            <span>Email: </span>
          </li>
          <li>
            <span>Phone: </span>
          </li>
          <li />
        </ul>
      )}
    </div>
  );
};

export default CustomerProfile;
