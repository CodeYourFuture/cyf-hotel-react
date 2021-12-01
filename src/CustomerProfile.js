import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [profile, setProfile] = useState("");
  //   if (!id) {
  //     return;
  //   }

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(response => response.json())
      .then(data => {
        setProfile(data);
        console.log(data);
      });
  }, [id]);

  if (!id) {
    return null;
  }
  return (
    <div>
      <ul className="customer-profile">
        <li>Customer Id: {profile.id}</li>
        <li>
          Customer Name: {profile.firstName} {profile.surname}
        </li>
        <li>Customer Email: {profile.email}</li>
        {profile.vip && <li>VIP</li>}
        <li>Phone: {profile.phoneNumber}</li>
      </ul>
    </div>
  );
};
export default CustomerProfile;
