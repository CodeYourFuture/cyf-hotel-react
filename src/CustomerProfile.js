import React from "react";

function CustomerProfile({ id, email, phoneNumber, vip }) {
  return (
    <div>
      <p> Customer Id: {id}</p>
      <p>Email: {email}</p>
      <p>Phone Number: {phoneNumber}</p>
      <p>VIP: {vip ? "yes" : "no"}</p>
    </div>
  );
}

export default CustomerProfile;
