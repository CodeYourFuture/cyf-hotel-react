import React from "react";

function CustomerProfile(props) {
  if (props.customer !== null) {
    console.log(props.customer);
    return (
      <ul>
        <li>Customer ID: {props.customer.id}</li>
        <li>E-mail: {props.customer.email}</li>
        <li>Phone number: {props.customer.phoneNumber}</li>
        <li>VIP: {props.customer.vip ? "Yes" : "No"}</li>
      </ul>
    );
  } else {
    return null;
  }
}

export default CustomerProfile;
