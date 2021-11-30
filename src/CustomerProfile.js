import React, { useState, useEffect } from "react";

function CustomerProfile({ id }) {
  const [customerProfile, setCustomerProfile] = useState("");
  useEffect(() => {
    if (!id) {
      return;
    }
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(response => response.json())
      .then(data => {
        setCustomerProfile(data);
        console.log(data);
      });
  }, [id]);
  if (!id) {
    return null;
  }
  return (
    <div>
      <ul className="customerProfile">
        <li>Customer Id : {customerProfile.id}</li>
        <li>Customer email : {customerProfile.email}</li>
        {customerProfile.vip && <li>VIP</li>}
        <li>Phone Number : {customerProfile.phoneNumber}</li>
      </ul>
    </div>
  );
}

export default CustomerProfile;
