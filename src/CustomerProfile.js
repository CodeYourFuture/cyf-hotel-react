import React, { useEffect, useState } from "react";

const CustomerProfile = props => {
  const [profile, setProfile] = useState(1);
  console.log(profile);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.b}`)
      .then(res => res.json())
      .then(data => {
        setProfile(data);
        console.log(data);
      });
  }, [props.b]);

  return (
    <div>
      <h2>Customer {props.b} Profile</h2>
      <ul>
        <li>Customer ID : {profile.id}</li>
        <li>Customer Email : {profile.email}</li>
        <li>VIP : {profile.vip ? "Yes" : "No"}</li>
        <li>Customer Number : {profile.phoneNumber}</li>
      </ul>
    </div>
  );
};

export default CustomerProfile;
