import React, { useState, useEffect } from "react";

function CustomerProfile(props) {
  const [profile, setProfile] = useState();
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(response => response.json())
      .then(data => {
        setProfile(data);
      });
  }, [props.id]);
  return profile ? (
    <div id={props.id} className="asideDiv">
      <p>Customer {props.id} Profile</p>
      <p>Customer Email: {profile.email} </p>
      <p>IS the customer VIP: {profile.vip ? "Yes" : "No"} </p>
      <p>Customer Phone Number: {profile.phoneNumber} </p>
    </div>
  ) : null;
}
export default CustomerProfile;
