import React from "react";

export default function CustomerProfile({ id, data }) {
  return (
    <div>
      <h1>Customer {id} profile</h1>
      <p>ID: {data.id}</p>
      <p>Email: {data.email}</p>
      <p>VIP: {data.vip ? "Yes" : "No"}</p>
      <p>Phone: {data.phoneNumber}</p>
    </div>
  );
}
