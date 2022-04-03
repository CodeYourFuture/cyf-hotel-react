import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [customerData, setCustomerData] = useState({});
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => setCustomerData(data));
  }, [props.id]);

  return props.id ? (
    <div className="customer-profile">
      <p>ID: {customerData.id}</p>
      <p>Email: {customerData.email}</p>
      <p>VIP: {customerData.vip ? "Yes" : "No"}</p>
    </div>
  ) : null;
};

export default CustomerProfile;
