import React from "react";

const CustomerProfile = (props) => {
  return (
    props.guest !== null && (
      <div>
        <h3>Customer profile</h3>
        <p>Customer id: {props.guest.id}</p>
        <p>Customer email: {props.guest.email}</p>
        <p>Customer status: {props.guest.vip === true ? "VIP" : "Normal"}</p>
        <p>Customer phone number: {props.guest.phoneNumber}</p>
      </div>
    )
  );
};

export default CustomerProfile;
