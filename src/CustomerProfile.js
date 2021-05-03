import React from "react";
const CustomerProfile = props => {
  return (
    <p>
      <span>Customer Id :</span>
      {props.id}
    </p>
  );
};

export default CustomerProfile;
