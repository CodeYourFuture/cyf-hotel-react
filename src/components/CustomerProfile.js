import React from "react";

export const CustomerProfile = props => {
  return (
    <div style={{ width: "20%", marginLeft: "30px" }}>
      <h3>Customer : {props.targetId}</h3>
      <h6>First Name : {props.targetFirstName}</h6>
      <h6>Second Name : {props.targetSecondName}</h6>
      <h6>E-mail : {props.targetEmail}</h6>
      <h6>Night(s) : {props.targetNight}</h6>
    </div>
  );
};
