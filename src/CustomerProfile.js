import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => setProfile(data));
  }, [props.id]);

  return (
    <div className="customer-profile">
      <ul>
        <h2>Customer {props.id} Profile </h2>
        <li>email: {profile.email}</li>
        <li>number:{profile.phoneNumber}</li>
        {profile.vip ? <li>VIP: {profile.vip.toString()}</li> : ""}
        {profile.vip ? <li>{profile.phoneNumber}</li> : ""}
      </ul>
    </div>
  );
};

export default CustomerProfile;
