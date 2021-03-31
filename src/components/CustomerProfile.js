import React from "react";

const CustomerProfile = props => {
  console.log("customer", props);
  return <div>{props.id}</div>;
};

export default CustomerProfile;
