import React from "react";

function CustomerProfile(props) {
  console.log(props.id);
  return props.id !== "" ? <div>Customer Profile: {props.id}</div> : <div />;
}

export default CustomerProfile;
