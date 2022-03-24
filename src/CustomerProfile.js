import React, { useEffect, useState } from "react";

const CustomerProfile = props => {
  const [customerProfile, setCustomerProfile] = useState("");

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.customerId}`)
      .then(response => response.json())
      .then(data => setCustomerProfile(data));
  }, [props.customerId]);

  if (customerProfile) {
    return (
      <div>
        <strong>Profile of Customer : {customerProfile.id}</strong>
        <ul>
          <li>
            <i>Customer ID: </i> {customerProfile.id}
          </li>
          <li>
            <i>Customer email: </i>
            {customerProfile.email}
          </li>
          <li>
            <i>Customer Phone Number:</i>
            {customerProfile.phoneNumber}
          </li>
          <li>
            <i>VIP Customer: </i> {customerProfile.vip ? "Yes" : "No"}
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
};
export default CustomerProfile;
