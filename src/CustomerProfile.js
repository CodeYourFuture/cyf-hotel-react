import React from "react";

export default function CustomerProfile({ customerId }) {
  return (
    <div>{customerId === 0 ? null : <p>Customer {customerId} Profile</p>}</div>
  );
}
