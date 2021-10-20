import React, { useEffect } from "react";

const CustomerProfile = props => {
  useEffect(() => {});
  return <div>{props.id && <p>Customer {props.id} profile</p>}</div>;
};

export default CustomerProfile;
