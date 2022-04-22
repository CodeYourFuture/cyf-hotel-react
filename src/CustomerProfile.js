import React, { useState, useEffect } from "react";

function CustomerProfile({ profile }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${profile}`)
      .then(resp => resp.json())
      .then(data => {
        setUser(data);
        console.log(user);
      });
  }, [profile]);

  return profile ? (
    <div className="user-profile-box">
      <p>ID: {user.id}</p>
      <p>Email: {user.email}</p>
      <p>Vip: {user.vip}</p>
      <p>Phone No: {user.phoneNumber}</p>
    </div>
  ) : (
    " "
  );
}
export default CustomerProfile;
