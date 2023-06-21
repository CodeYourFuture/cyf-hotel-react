import React from "react";
import "./App.css";

function CustomerProfile(props) {
  return (
    <>
      <div>
        <p>{props.customerProfile}</p>
        <p>{props.customerId}</p>
      </div>
    </>
  );
}

export default CustomerProfile;
