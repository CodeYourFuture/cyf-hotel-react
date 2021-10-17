import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [customerData, setCustomerData] = useState(null);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(response => response.json())
      .then(data => {
        setCustomerData(data);
      });
  }, [props.id]);
  return (
    customerData && (
      <div>
        <h3>Customer {props.id} Profile</h3>
        <p>
          Customer Name: {customerData.title} {customerData.firstName}
          {""} {customerData.surname}
        </p>
        <p>VIP: {customerData.vip ? "yes" : "No"}</p>
        <p>Email: {customerData.email}</p>
        <p>Phone Number No: {customerData.phoneNumber}</p>
      </div>
    )
  );
};
export default CustomerProfile;
