import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [profile, setProfile] = useState(false);
  //   id:null,
  //   email: null,
  //   vip: null,
  //   phoneNumber: null

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.customerId}`)
      .then(res => res.json())
      .then(data => {
        setProfile(data);
      });
  }, [props.customerId]);
  return (
    <div className="customer-profile">
      <ul>
        <li>Customer ID: {profile.id}</li>
        <li>VIP: {profile.vip === true ? "Yes" : "No"} </li>
        <li>Email: {profile.email} </li>
        <li>Contact Number: {profile.phoneNumber} </li>
      </ul>
    </div>
  );
};

export default CustomerProfile;
