import React, { useEffect, useState } from "react";

function CustomerProfile({ id }) {
  const [customerProfile, setCustomerProfile] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(response => response.json())
      .then(data => setCustomerProfile(data))
      .catch(err => console.log(err));
  }, [id]);

  return customerProfile ? (
    <div>
      <p>Customer {id} Profile:</p>
      <ul>
        <li>Email address:{customerProfile.email}</li>
        <li>Phone Number:{customerProfile.phoneNumber}</li>
        <li>Vip Status:{customerProfile.vip ? "Yes" : "no"}</li>
      </ul>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default CustomerProfile;
