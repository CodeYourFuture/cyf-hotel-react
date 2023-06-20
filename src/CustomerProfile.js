import React, { useState, useEffect } from "react";

const CustomerProfile = (props) => {
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.customerProfileId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [props.customerProfileId]);

  return <p>Customer {props.customerProfileId} profile</p>;
};

export default CustomerProfile;
