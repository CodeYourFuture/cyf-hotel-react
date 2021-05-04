import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [customer, setCustomer] = useState({});
  useEffect(() => {
    fetch(`https://cyf-react.illicitonion.com/customers/${props.id}`)
      .then(res => res.json())
      .then(data => setCustomer(data));
  }, [props.id]);

  return (
    <div>
      <ul>
        <li>
          <b>Customer ID..............: </b>
          {customer.id}
        </li>
        <li>
          <b>Customer Title..........: </b>
          {customer.title}
        </li>
        <li>
          <b>Customer Name........: </b>
          {customer.firstName}
        </li>
        <li>
          <b>Customer Surname..: </b>
          {customer.surname}
        </li>
        <li>
          <b>Customer Email........: </b>
          {customer.email}
        </li>
        <li>
          {customer.vip ? (
            <span>
              <b>Status.........................: </b> VIP
            </span>
          ) : null}
        </li>
        <li>
          <b>Customer Phone.......: </b>
          {customer.phoneNumber}
        </li>
      </ul>
    </div>
  );
};
export default CustomerProfile;
