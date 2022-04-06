import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [customer, setCustomer] = useState({});

  console.log(`https://cyf-react.glitch.me/customers/${props.id}`);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCustomer(data);
      });
  }, [props.id]);

  return (
    <div>
      <p>{customer.id}</p>
      <p>{customer.email}</p>
      {customer.vip ? <p>{customer.phoneNumber}</p> : null}
    </div>
  );
};

export default CustomerProfile;
