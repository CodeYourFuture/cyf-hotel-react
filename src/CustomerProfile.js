import React from "react";

function CustomerProfile(props) {
  if (props.customer !== null) {
    console.log(props.customer);
    return <p>Customer nr {props.customer.id} Profile</p>;
  } else {
    return null;
  }
}

export default CustomerProfile;
