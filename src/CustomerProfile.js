import React, { useEffect, useState } from "react";

const CustomerProfile = ({ customerId }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${customerId}`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      });
  }, [customerId]);

  return (
    <div>
      {profile && (
        <div>
          <h2>Customer {profile.id} profile</h2>
          <ul>
            <li>Title: {profile.title}</li>
            <li>First Name: {profile.firstName}</li>
            <li>Surname: {profile.surname}</li>
            <li>Email: {profile.email}</li>
            <li>VIP: {profile.vip ? "Yes" : "No"}</li>
            <li>Phone: {profile.phoneNumber}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomerProfile;
