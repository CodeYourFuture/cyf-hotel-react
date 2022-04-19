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

  if (profile && CustomerProfile) {
    console.log("customer Profile has loaded ");

    return (
      <div className="Profile-Container">
        <ul className="profile">
          <li ClassName="CustomerProfile-Header">
            <h5>Customer Profile </h5>
          </li>
          <li>ID: {profile.id}</li>
          <li>
            Name: {profile.firstName} {profile.surname}
          </li>
          <li>Email: {profile.email}</li>
          {profile.vip && <li>VIP</li>}
          <li>Phone: {profile.phoneNumber}</li>
        </ul>
      </div>
    );
  } else if (profile && !CustomerProfile) {
    console.log("Customer Profile is loading...");
    return <p>Customer Profile is loading...</p>;
  } else {
    return null;
  }
};

export default CustomerProfile;
