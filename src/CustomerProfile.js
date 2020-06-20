import React, { useState, useEffect } from "react";

function CustomerProfile({ id }) {
  const [singleCustomer, setSingleCustomer] = useState([]);

  useEffect(() => {
    fetch(` https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => setSingleCustomer(data));
  });

  return (
    <td>
      <p>customer id: {singleCustomer.id}</p>
      <p>customer email: {singleCustomer.email}</p>
      <p>phone number: {singleCustomer.phoneNumber}</p>
      <p>{singleCustomer.vip && "VIP"}</p>
    </td>
  );
}

export default CustomerProfile;
