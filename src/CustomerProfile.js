import React from "react";

const CustomerProfile = props => {
  console.log(props.id);
  return (
    <div>
      <p>Customer ID: {props.id}</p>
    </div>
  );
};
export default CustomerProfile;
