import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [customerData, setCustomerData] = useState("");
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
        <ul>
          <li>
            Customer Name: {customerData.title} {customerData.firstName}
            {""} {customerData.surname}
          </li>
          <p>VIP: {customerData.vip === true ? "yes" : "No"}</p>
          <p>Email: {customerData.email}</p>
          <p>Phone Number No: {customerData.phoneNumber}</p>
        </ul>
      </div>
    )
  );
};
export default CustomerProfile;
