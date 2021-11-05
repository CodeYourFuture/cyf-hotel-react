import React, { useState, useEffect } from "react";

function CustomerProfile(props) {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(response => response.json())
      .then(data => {
        setProfile(() => setProfile(data));
      });
  }, [props.id]);
  return (
    <div>
      <p> Show profile</p>
      <ul>
        <li>Id : {profile.id}</li>
        <li>
          Name : {profile.firstName} {profile.surname}
        </li>
        <li>VIP : {profile.vip ? "Yes" : "No"}</li>
        <li> Email : {profile.email}</li>
        <li> Phone Number : {profile.phoneNumber}</li>
      </ul>
    </div>
  );
}

export default CustomerProfile;
