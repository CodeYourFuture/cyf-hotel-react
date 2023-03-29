import React, { useState, useEffect } from "react";

function CustomerProfile(props) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`https://temporary-cyf-react.onrender.com/customers/${props.id}`)
      .then((response) => response.json())
      .then((data) => {
        setProfile(data);
      })
      .catch((error) => console.log(error));
  }, [props.id]);

  return (
    <div className="profile-card">
      {profile && (
        <div className="profile-details">
          <p>Customer {props.id} Profile</p>
          <p>
            Name: {profile.firstName} {profile.surname} ({profile.title})
          </p>
          <p>Email: {profile.email}</p>
          <p>Phone: {profile.phoneNumber}</p>
          <p>Status: {profile.vip ? "V.I.P Customer." : "NOT V.I.P"} </p>
        </div>
      )}
    </div>
  );
}

export default CustomerProfile;
