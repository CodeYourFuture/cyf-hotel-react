import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        setProfile(data);
      });
  }, [props.id]);

  return (
    props.id && (
      <ul>
        <li>
          <span>Customer ID :</span>
          {props.id}
        </li>
        <li>
          <span>Email :</span>
          {profile.email}
        </li>

        <li>
          <span>VIP :</span>
          {profile.vip ? "Yes" : "No"}
        </li>

        <li>
          <span>Phone Number :</span>
          {profile.phoneNumber}
        </li>
      </ul>
    )
  );
};

export default CustomerProfile;
