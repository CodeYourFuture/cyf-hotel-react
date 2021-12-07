import React, { useEffect, useState } from "react";

const CustomerProfile = prop => {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${prop.id}`)
      .then(response => response.json())
      .then(data => setCustomer(data));
  }, [prop.id]);

  return (
    <div>
      {prop.id ? (
        <ul>
          <li>ID: {customer.id}</li>
          <li>
            Name: {customer.firstName} {customer.surname}
          </li>
          <li>Email: {customer.email}</li>
          {customer.vip ? (
            <li>This customer is a VIP</li>
          ) : (
            <li>Non-VIP customer</li>
          )}
          <li>Phone: {customer.phoneNumber} </li>
        </ul>
      ) : null}
    </div>
  );
};
export default CustomerProfile;
