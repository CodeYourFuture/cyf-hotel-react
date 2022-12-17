import React, { useState, useEffect } from "react";

export default function CustomerProfile({ customerId }) {
  const [customerInfo, setCustomerInfo] = useState({});
  useEffect(() => {
    console.log("...");
    fetch(`https://cyf-react.glitch.me/customers/${customerId}`)
      .then(res => res.json())
      .then(data => setCustomerInfo(data));
  }, [customerId]);
  return (
    <div>
      {customerId === 0 ? null : (
        <>
          <p>Customer ID: {customerInfo.id}</p>
          <p>Email: {customerInfo.email}</p>
          <p>VIP: {customerInfo.vip ? "yes" : "no"}</p>
          <p>Phone number: {customerInfo.phoneNumber}</p>
        </>
      )}
    </div>
  );
}
