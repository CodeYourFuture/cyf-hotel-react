import React, { useState, useEffect } from "react";

function CustomerProfile(props) {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(response => response.json())
      .then(data => setProfile(data));
  }, [props.id]);
  if (profile) {
    return (
      <div>
        <h3>{`Customer ${profile.id} Profile`}</h3>
        <ul>
          <li>Customer ID: {profile.id}</li>
          <li>Email: {profile.email}</li>
          {profile.vip ? <li>VIP: Yes</li> : <li>VIP: No</li>}
          <li>{profile.phoneNumber}</li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

export default CustomerProfile;
