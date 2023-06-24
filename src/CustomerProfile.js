
import React, { useState, useEffect } from "react";

function CustomerProfile({ id }) {
  const [customerProfile, setCustomerProfile] = useState();

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCustomerProfile(data);
      });
  }, [id]);
  

  return (
    <div>
      <h2>Customer {id} Profile</h2>
      {customerProfile && (
        <ul>
          <li>Customer ID: {customerProfile.id}</li>
          <li>Email: {customerProfile.email}</li>
          <li>VIP: {customerProfile.vip ? "Yes" : "No"}</li>
          <li>Phone Number: {customerProfile.phoneNumber}</li>
        </ul>
      )}
    </div>
  );
}

export default CustomerProfile;
