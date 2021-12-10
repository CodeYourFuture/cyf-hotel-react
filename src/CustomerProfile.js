import React, { useEffect, useState } from "react";
import "./App.css";
const CustomerProfile = props => {
  const [customerProfile, setCustomerProfile] = useState(Object);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        setCustomerProfile(data);
      });
  }, [props.id]);
  console.log(customerProfile);

  return (
    <ul>
      <li>{customerProfile.id} </li>
      {console.log(customerProfile.id)}
      <li>{customerProfile.title} </li>
      <li>{customerProfile.firstName} </li>
      <li>{customerProfile.surname} </li>
      <li>{customerProfile.email} </li>
      <li>{customerProfile.vip === true ? "vip" : ""} </li>
      <li>{customerProfile.phoneNumber} </li>
    </ul>
  );
};
export default CustomerProfile;
