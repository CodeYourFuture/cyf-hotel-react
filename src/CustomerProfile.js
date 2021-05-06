import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [profile, setProfile] = useState("");

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        setProfile(data);
      });
  }, [props.id]);

  return (
    <div>
      {profile ? (
        <div className="col-4 offset-4 customer-profile">
          <h4>Customer Profile</h4>
          <p>Customer ID: {profile.id}</p>
          <p>Customer email: {profile.email}</p>
          <p>Customer VIP Status: {profile.vip ? "Yes" : "No"}</p>
          <p>Customer Phone Number: {profile.phoneNumber}</p>
        </div>
      ) : null}
    </div>
  );
};

export default CustomerProfile;
