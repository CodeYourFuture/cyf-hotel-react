import React, { useState, useEffect } from "react";

function CustomerProfile(props) {
  const [customerData, setCustomerData] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.customerId}`)
      .then(res => res.json())
      .then(data => setCustomerData(data));
  }, [props.customerId]);

  return customerData ? (
    <div className="profileListStyle">
      <h5>Customer {props.customerId} profile:</h5>
      <ul>
        <li>{customerData.id}</li>
        <li>{customerData.email}</li>
        <li>{customerData.phoneNumber}</li>
        <li>{customerData.vip ? "vip" : ""}</li>
      </ul>
    </div>
  ) : null;
}

export default CustomerProfile;
