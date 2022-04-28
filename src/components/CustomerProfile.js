import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCustomer(data);
      });
  }, [props.id]);

  return props.id ? (
    <div className="customer-profile">
      <p>Customer id...........: {customer.id}</p>
      <p>Customer email....: {customer.email}</p>
      {customer.vip ? <p>Customer phone..: {customer.phoneNumber}</p> : null}
    </div>
  ) : null;
};

export default CustomerProfile;
