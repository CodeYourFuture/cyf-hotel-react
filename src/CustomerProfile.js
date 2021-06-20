import React, { useEffect, useState } from "react";
const CustomerProfile = ({ customerId }) => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${customerId}`)
      .then(res => res.json())
      .then(data => setProfile(data));
  }, [customerId]);

  return (
    <div className="customer">
      <h2>Customer Profile</h2>
      <p>{profile.vip && <h4 className="vip">VIP Customer</h4>}</p>
      <p>ID: {customerId}</p>
      <p>Email: {profile.email}</p>
      <p>Phone: {profile.phoneNumber}</p>
    </div>
  );
};
export default CustomerProfile;
