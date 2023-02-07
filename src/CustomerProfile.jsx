import React from "react";

const CustomerProfile = props => {
  // console.log(props.id);

  return (
    <div>
      <p>Customer {props.name}</p>
      <p>Email - {props.email}</p>
      <p>Status - {props.vip}</p>
      <p>Contact - {props.phone}</p>
    </div>
  );
};

export default CustomerProfile;
