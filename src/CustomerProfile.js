import React, { useState, useEffect } from "react";

const CustomerProfile = ({ profile }) => {
  const [newProfile, setNewProfile] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${profile}`)
      .then(res => res.json())
      .then(data => {
        setNewProfile(data);
        console.log(data);
      });
  }, [profile]);

  if (newProfile) {
    return (
      <div>
        customer profile{" "}
        <ul>
          <li>Id {newProfile.id}</li>
          <li>email {newProfile.email}</li>
          <li>phone number {newProfile.phoneNumber}</li>
          <li>{newProfile.vip && "VIP status: VIP"}</li>
        </ul>{" "}
      </div>
    );
  }
  return null;
};
export default CustomerProfile;
