import React, { useEffect, useState } from "react";

export default function CustomerProfile({ id }) {
  const [customerData, setCustomerData] = useState({});
  const apiURL = "https://cyf-react.glitch.me/customers/";
  useEffect(() => {
    fetch(`${apiURL}${id}`)
      .then(res => res.json())
      .then(data => setCustomerData(data));
  }, [id]);
  return (
    <div>
      <h4>
        Customer <strong>{id}</strong> Profile
      </h4>
      <ul style={{ listStyle: "none" }}>
        <li>
          <em>Full Name: </em>
          {customerData.title} {customerData.firstName} {customerData.surname}
        </li>
        <li>
          <em>Phone: </em>
          {customerData.phoneNumber}
        </li>
        <li>
          <em>Email: </em>
          {customerData.email}
        </li>
        {customerData.vip && (
          <li>
            <strong>VIP customer</strong>
          </li>
        )}
      </ul>
    </div>
  );
}
