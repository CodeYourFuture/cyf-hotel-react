import React from "react";

function CustomerProfile({ id, email, vip, phoneNumber }) {
  return (
    <div>
      <h3>Customer Profile</h3>
      <p>Customer id: {id}</p>
      <p>Email: {email}</p>
      <p>VIP Room: {vip ? "yes" : "no"} </p>
      <p>Phone number: {phoneNumber}</p>
    </div>
  );
}

export default CustomerProfile;
