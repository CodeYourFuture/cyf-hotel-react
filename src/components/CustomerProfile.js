import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [currentProfile, setCurrentProfile] = useState([]);
  console.log(currentProfile);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => setCurrentProfile(data));
  }, [id]);

  return (
    <td>
      {currentProfile.id} <br />
      {currentProfile.email}
      <br />
      {currentProfile.phoneNumber}
      <br />
      {currentProfile.vip && "VIP"}
    </td>
  );
};

export default CustomerProfile;
