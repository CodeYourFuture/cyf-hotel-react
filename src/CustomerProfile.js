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
        <h5>Customer {profile.id} Profile:</h5>
        <ul className="profile-list">
          <li>Customer email: {profile.email}</li>
          <li>VIP? {profile.vip ? <p>YES</p> : <p>NO</p>} </li>
          <li>Customer phone number: {profile.phoneNumber}</li>
        </ul>
      </div>
    );
  }
}

export default CustomerProfile;
