import React, { useEffect, useState } from "react";

const CustomerProfile = props => {
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(results => results.json())
      .then(data => setCustomer(data));
  }, [props.id]);

  return (
    <div className={props.id ? "profile" : "no-profile"}>
      <h1>Customer Profile</h1>
      <ul>
        <li>
          <b>Customer Title :</b>Customer Title : {customer.title}
        </li>
        <li>
          <b>Customer Name :</b>Customer Name : {customer.firstName}
        </li>
        <li>
          <b>Customer Surname :</b>
          {customer.surname}
        </li>
        <li>
          <b>Customer Email :</b>Customer Email :{customer.email}
        </li>
        <li>
          {" "}
          {customer.vip ? (
            <span>
              <b>Status :</b> VIP
            </span>
          ) : null}
        </li>
        <li>
          <b>Customer Phone :</b>
          {customer.phoneNumber}
        </li>
      </ul>
    </div>
  );
};

export default CustomerProfile;
