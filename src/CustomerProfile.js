import React from "react";
import "./App.css";

function CustomerProfile(props) {
  return (
    <>
      <div>
        <p>test if this component is working</p>
        <p>{props.customerProfile}</p>
        <p>{props.customerId}</p>
      </div>
    </>
  );
}

export default CustomerProfile;
