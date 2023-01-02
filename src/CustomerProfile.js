import React, { useState, useEffect } from "react";

export default function CustomerProfile(props) {
  const [customerDetails, setCustomerDetails] = useState({});

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        setCustomerDetails(data);
      })
      .catch(err => console.log(err));
  }, [props.id]);
  return (
    <div className="id-sec">
      <strong>Customer {props.id} Profile</strong>
      <p>
        {" "}
        <strong>customer Email:</strong> {customerDetails.email}{" "}
      </p>
      <p>
        <strong>customer Phone: </strong>
        {customerDetails.phoneNumber}
      </p>
      <p>
        <strong>Customer Base: </strong>
        {Object.values(customerDetails)[5] ? "VIP" : "Standard"}
      </p>
    </div>
  );
}
