import React, { useState, useEffect } from "react";

function CustomerProfile({ id }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(info => setProfile(info));
  }, [id]);

  return (
    <>
      {profile ? (
        <div className="profile-wrap">
          <h3>Customer {id} Profile:</h3>
          <p>Email: {profile.email} </p>
          <p>VIP Status: {profile.vip ? "Yes" : "No"} </p>
          <p>Contact Number: {profile.phoneNumber} </p>
        </div>
      ) : null}
    </>
  );
}

export default CustomerProfile;
