import React, { useState, useEffect } from "react";

const CustomerProfile = ({ customerId }) => {
  const [customerProf, setCustomerProf] = useState({});
  console.log(`https://cyf-react.glitch.me/customers/${customerId}/`);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${customerId}/`)
      .then(res => res.json())
      .then(data => {
        setCustomerProf(data);
        console.log(data);
      });
  }, [customerId]);
  if (!customerProf) return "Loading...";
  else
    return (
      <ul>
        <li>Customer {customerId} Profile :</li>
        <li>The Email: {customerProf.email}</li>
        {customerProf.vip ? (
          <li>The VIP Status: Yes</li>
        ) : (
          <li>The VIP Status: No</li>
        )}
      </ul>
    );
};
export default CustomerProfile;
