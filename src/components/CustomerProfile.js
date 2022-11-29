import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [customer, setCustomer] = useState({});
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => setCustomer(data));
  }, [props.id]);
  console.log(customer);
  return (
    <>
      {customer.vip ? (
        <div>
          <h1>Customer {props.id} Profile</h1>
          <ul>
            <li>{customer.email}</li>
            <li>{customer.phoneNumber}</li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CustomerProfile;
