import React, { useState, useEffect } from "react";

export default function CustomerProfile({ id }) {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://cyf-react.glitch.me/customers/${id}`
    )
      .then(res => res.json())
      .then(data => setProfile(data));
  }, [id]);

  return (
    <ul>
      <li>ID {profile.id}</li>
      <li>EMAIL {profile.email}</li>
      <li>VIP {profile.vip ? "YES" : "NO"}</li>
      <li>PHONE {profile.phoneNumber}</li>
    </ul>
  );
}
