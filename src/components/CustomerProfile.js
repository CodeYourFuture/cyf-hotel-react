import React, { useEffect, useState } from "react";

function CustomerProfile({ id }) {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    if (id !== -1) {
      fetch(`https://cyf-react.glitch.me/customers/${id}`)
        .then(res => res.json())
        .then(data => {
          setProfile(data);
        })
        .catch(err => console.log("Customer Profile", err));
    }
  }, [id]);
  return (
    <div>
      {id !== -1 ? (
        profile !== null ? (
          <ul>
            <li>Customer ID: {profile.id}</li>
            <li>Email: {profile.email}</li>
            <li>Phone: {profile.phoneNumber}</li>
            <li>VIP: {profile.vip ? "true" : "false"}</li>
          </ul>
        ) : (
          "null"
        )
      ) : (
        ""
      )}
    </div>
  );
}

export default CustomerProfile;
