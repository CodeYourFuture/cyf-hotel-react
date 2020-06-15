import React, { useState, useEffect } from "react";

function CustomerProfile(props) {
  const [profile, setProfile] = useState();

  useEffect(() => {
    fetch(`https://cyf-react.illicitonion.com/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log(data.email);
        setProfile(data);
      });
  }, [props.id]);

  if (!profile) {
    return null;
  } else {
    return (
      <div>
        <p>Customer {profile.id} Profile</p>
        <p>Customer email: {profile.email}</p>
        <p>VIP? {profile.vip ? <p>YES</p> : <p>NO</p>} </p>
        <p>Customer phone number: {profile.phoneNumber}</p>
      </div>
    );
  }
}

export default CustomerProfile;
