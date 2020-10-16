import React from "react";
import { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [customer, setCustomer] = useState("");

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(response => response.json())
      .then(data => setCustomer(data));
  }, [props.id]);

  return (
    <div>
      <div>CustomerProfile {customer.id}</div>
      <div>
        {customer.firstName} {customer.surname}
      </div>
      <div>{customer.email}</div>
      <div>VIP: YES</div>
      <div> {customer.phoneNumber}</div>
    </div>
  );
};

export default CustomerProfile;
