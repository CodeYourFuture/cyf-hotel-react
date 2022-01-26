import React, { useEffect, useState } from "react";

function CustomerProfile(props) {
  const [customerProfile, setCustomerProfile] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/customers/" + props.id)
      .then(response => response.json())
      .then(data => {
        setCustomerProfile(data);
      });
  }, [props.id]);

  return (
    <div>
      <h1>Customer {customerProfile.id} Profile</h1>
      <p>Email: {customerProfile.email}</p>
      <p>Phone: {customerProfile.phoneNumber}</p>
      <p>VIP: {customerProfile.vip ? "Yes" : "No"}</p>
    </div>
  );
}

export default CustomerProfile;
