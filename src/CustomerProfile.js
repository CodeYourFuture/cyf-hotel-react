import React, { useEffect, useState } from "react";

const CustomerProfile = props => {
  console.log(props.id);

  const [customerProfile, setCustomerProfile] = useState({});

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => setCustomerProfile(data));
  }, [props.id]);

  return props.id ? (
    <div>
      <ul>
        <li>Customer {customerProfile.id} </li>
        <li> Email: {customerProfile.email} </li>
        <li> Phone number: {customerProfile.phoneNumber} </li>
        <li> VIP: {customerProfile.vip ? "yes" : "no"} </li>
      </ul>
    </div>
  ) : null;
};

export default CustomerProfile;
