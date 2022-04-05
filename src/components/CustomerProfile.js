import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [profile, setProfile] = useState("");

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProfile(data);
        console.log(data);
      });
  }, [id]);

  if (id) {
    return " ";
  }

  return (
    <div>
      <ul className="profile">
        <li>Customer Id: {profile.id}</li>
        <li>
          {" "}
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
