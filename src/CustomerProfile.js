import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [customerData, setCustomerData] = useState(null);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.customerId}`)
      .then(res => res.json())
      .then(data => setCustomerData(data));
  }, []);
  console.log(customerData);
  console.log(props.customerId);
  return (
    <div>
      {/* <p>{customerData.id}</p>
      <p>{customerData.title}</p>
      <p>{customerData.firstName}</p>
      <p>{customerData.surname}</p>
      <p>{customerData.email}</p>
      <p>{customerData.phoneNumber}</p> */}
    </div>
  );
};

export default CustomerProfile;
