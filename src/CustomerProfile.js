import React from "react";

const CustomerProfile = (props) => {
  console.log(props.id + "inside customer profile");
  return props.id !== 0 && <p>Customer {props.id} Profile</p>;
};

export default CustomerProfile;
