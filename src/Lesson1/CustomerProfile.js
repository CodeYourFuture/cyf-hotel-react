import React from "react";

export default function CustomerProfile({ id, email, vip, phoneNumber }) {
  return (
    <div>
      <h3>Customer Profile</h3>
      <p>customer id: {id}</p>
      <p>Email: {email}</p>
      <p>VIP Room:{vip ? "yes" : "no"}</p>
      <p>PhoneNumber: {phoneNumber}</p>
    </div>
  );
}
