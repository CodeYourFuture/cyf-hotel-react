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
      <p>Customer Profile: {id}</p>
      <ul>
        <li>{profileCard.title}</li>
        <li>{profileCard.firstName}</li>
        <li>{profileCard.surname}</li>
        <li>{profileCard.email}</li>
        <li>{profileCard.phoneNumber}</li>
        <li>{profileCard.roomId}</li>
        <li>{profileCard.vip && "VIP"}</li>
      </ul>
    </div>
  );
}
export default CustomerProfile;
