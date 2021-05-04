import React, { useEffect, useState } from "react";

const CustomerProfile = props => {
  console.log(props);
  const [customer, setCustomer] = useState({});
  console.log(customer);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(response => response.json())
      .then(data => setCustomer(data));
  }, [props.id]);

  return (
    <div>
      <p>Customer {props.id} Profile</p>
      <ul>
        <li> Customer Id: {customer.id} </li>
        <li> Email address: {customer.email} </li>
        <li> Is VIP: {customer.vip ? "Yes" : "No"} </li>
        <li> Phone Number: {customer.phoneNumber} </li>
      </ul>
    </div>
  );
};

export default CustomerProfile;
