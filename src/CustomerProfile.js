import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [customersShow, setCustomerShow] = useState({});
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        setCustomerShow(data);
      });
  }, [props.id]);
  return (
    <div>
      <p>"Customer Profile" {props.id}</p>
      <p>"Customer show Name" {customersShow.firstName}</p>
      <p>"Customer show vip" {customersShow.vip ? "true" : "false"}</p>
      <p>"Customer show email" {customersShow.email}</p>
      <p>"Customer show phoneNumber" {customersShow.phoneNumber}</p>
    </div>
  );
};

export default CustomerProfile;
