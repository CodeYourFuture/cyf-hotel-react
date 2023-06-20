import React, { useState, useEffect } from "react";

const CustomerProfile = (props) => {
  let [emailAddress, setEmailAddress] = useState("");
  let [vipStatus, setVipStatus] = useState(null);
  let [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    console.log("profile id", props.customerProfileId);
    if (props.customerProfileId) {
      fetch(`https://cyf-react.glitch.me/customers/${props.customerProfileId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setEmailAddress(data.email);
          setVipStatus(data.vip ? "Vip Status" : "Not VIP");
          setPhoneNumber(data.phoneNumber);
        });
    }
  }, [props.customerProfileId]);

  return (
    <ul>
      <li>Customer {props.customerProfileId} profile</li>
      <li>Email: {emailAddress}</li>
      <li>VIP: {vipStatus}</li>
      <li>Phone: {phoneNumber}</li>
    </ul>
  );
};

export default CustomerProfile;
