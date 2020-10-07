import "./App.css";

import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [customer, setCustomer] = useState(null);

  console.log("hey" + props.id);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setCustomer(data);
      });
  }, [props.id]);

  if (customer) {
    if (customer.vip && customer.phoneNumber) {
      return (
        <div>
          <table class="customer">
            <th>{`Customer ${props.id} profile`}</th>
            <tr>{customer.id}</tr>
            <tr>{customer.email}</tr>{" "}
          </table>
        </div>
      );
    } else {
      return (
        <div>
          Sorry this customer is not VIP or there is no recorded phone number
        </div>
      );
    }
  } else {
    return null;
  }
};

export default CustomerProfile;
