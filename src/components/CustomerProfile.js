import React, { useState, useEffect } from "react";

function CustomerProfile({ id }) {
  const [profileCard, setProfileCard] = useState({});
  useEffect(() => {
    if (id !== null) {
      fetch(`https://cyf-react.glitch.me/customers/${id}`)
        .then(res => res.json())
        .then(data => {
          console.log("Fetch Data:", data);
          setProfileCard(data);
        });
    }
  }, [id]);

  return (
    <div className="profileCard">
      <i className="fas fa-times-circle" />
      <p>Customer Profile: {id}</p>
      <ul>
        <li>Title:{profileCard.title}</li>
        <li>
          Name:{profileCard.firstName} {profileCard.surname}
        </li>
        <li>Email address:{profileCard.email}</li>
        <li>Phone number:{profileCard.phoneNumber}</li>
        <li>VIP/NoVIP{profileCard.vip && "VIP"}</li>
      </ul>
    </div>
  );
}
export default CustomerProfile;
