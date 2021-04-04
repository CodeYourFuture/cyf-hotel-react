import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(response => response.json())
      .then(data => {
        setProfile(data);
      });
  }, [props.id]);
  return (
    profile && (
      <div>
        <p>Customer {props.id} Profile:</p>
        <p> ID: {profile.id} </p>
        <p> Email: {profile.email} </p>
        <p> Phone Number: {profile.phoneNumber} </p>
        <p> VIP: {profile.vip === true ? "Yes" : "No"} </p>
      </div>
    )
  );
};

export default CustomerProfile;
