import React from "react";

export const CustomerProfile = props => {
  return (
    <div style={{ width: "20%", marginLeft: "30px" }}>
      <h3>Customer : {props.targetId}</h3>
      <h6>E-mail : {props.targetEmail}</h6>
      <h6>VIP : {props.targetVip}</h6>
      <h6>Phone Number : {props.targetPhoneNumber}</h6>
    </div>
  );
};
