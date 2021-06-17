import React from "react";

const CustomerProfile = props => {
    console.log("Clicked activated me");
  return <p>Customer {props.customerId} Profile</p>;
};

export default CustomerProfile;
