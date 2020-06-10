import React, { useEffect, useState } from "react";

const CustomerProfile = props => {
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(results => results.json())
      .then(data => setCustomer(data));
  }, [props.id]);

  return (
    <div className={props.id > 0 ? "profile" : "no-profile"}>
      <h2>Customer Profile</h2>
      <hr />
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
      <hr />
    </div>
  );
};

export default CustomerProfile;
