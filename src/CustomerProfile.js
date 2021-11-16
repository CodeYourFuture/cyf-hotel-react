import React, { useEffect, useState } from "react";

function CustomerProfile(props) {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        setProfile(data);
      });
  }, [props.id]);

  return (
    <div class="border">
      <ul>
        <li>Customer {props.id} profile</li>
        <li>ID {props.id}</li>
        <li>Email {profile.email}</li>
        <li>VIP {profile.vip ? "Yes" : "No"}</li>
        <li>Phone number {profile.phoneNumber}</li>
      </ul>
      {/* A customer profile should show the customer
      ID, their email, if they are VIP and their phone number in a list. */}

      <button onClick={props.onClose}>x</button>
    </div>
  );
}

export default CustomerProfile;
