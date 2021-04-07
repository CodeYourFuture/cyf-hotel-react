import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [customer, setCustomer] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(response => response.json())
      .then(data => {
        setCustomer(data);
        setIsLoaded(true);
      });
  }, [props.id]);

  return customer ? (
    <div>
      <p>Customer {customer.id} Profile</p>
      <p>Customer email : {customer.email}</p>
      <p>Customer VIP Status : {customer.vip ? "Yes" : "No"}</p>
      <p>Customer Phone Number : {customer.phoneNumber}</p>
    </div>
  ) : null;
};

export default CustomerProfile;
