import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [profile, setProfile] = useState([]);
  useEffect(
    function() {
      fetch(`https://cyf-react.glitch.me/customers/${id}`)
        .then(response => response.json())
        .then(data => {
          console.log("This data for the CP", data);
          setProfile(data);
        });
    },
    [id]
  );
  console.log("Data ");

  return (
    id &&
    (profile && (
      <div>
        <p>Customer Profile:</p>
        <ul>
          <li>Customer ID: {profile.id} </li>
          <li>Customer Email: {profile.email} </li>
          <li>Customer phone number: {profile.phoneNumber} </li>
          <li>VIP Customer: {profile.vip ? "Yes" : "No"} </li>
        </ul>
      </div>
    ))
  );
};

export default CustomerProfile;