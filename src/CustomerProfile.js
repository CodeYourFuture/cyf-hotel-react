import React, { useState, useEffect } from "react";

const CustomerProfile = (props) => {
  const [customerInfo, setCustomerInfo] = useState({});

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then((res) => res.json())
      .then((data) => setCustomerInfo(data));
  }, [props.id]);

  return props.id ? (
    <div className="customerInfo">
      <p>ID: {customerInfo.id}</p>
      <p>Email: {customerInfo.email}</p>
      <p>VIP: {customerInfo.vip ? "Yes" : "No"}</p>
    </div>
  ) : null;
};

export default CustomerProfile;
