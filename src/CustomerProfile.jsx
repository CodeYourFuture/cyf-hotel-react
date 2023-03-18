import React, { useState, useEffect } from "react";

function CustomerProfile(props) {
  const [customerData, setCustomerData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then((res) => res.json())
      .then((data) => {
        setCustomerData(data);
        setLoading(false)
      });
  }, [props.id]);

  if (loading) {
    return (
        <div>loading...</div>
    )
  }

  if (!customerData) {
    return null;
  }

  console.log(customerData);

  return (
    <ul className="customer-profile">
      <li>Customer ID: {props.id}</li>
      <li>Email: {customerData.email}</li>
      <li>VIP status: {customerData.vip ? "VIP" : "Not VIP"}</li>
      <li>Phone number: {customerData.phoneNumber}</li>
    </ul>
  );
}

export default CustomerProfile;
