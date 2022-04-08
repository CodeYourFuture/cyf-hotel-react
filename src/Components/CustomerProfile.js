import React, { useState, useEffect } from "react";

function CustomerProfile(props) {
  const [profile, setProfile] = useState("");
  const { id } = props;

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => setProfile(data));
  }, [id]);

  return (
    <li className="profile">
      <div>
        <h3>Customer Profile:</h3>
        <p>ID: {id}</p>
        <p>Email: {profile.email}</p>
        <p>Phone Number: {profile.phoneNumber}</p>
      </div>
    </li>
  );
}

export default CustomerProfile;
