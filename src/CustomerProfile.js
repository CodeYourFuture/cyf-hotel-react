import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(response => response.json())
      .then(data => setProfile(data));
  }, [id]);

  return (
    <ul className="list-group">
      <h3>Customer Profile:</h3>
      <li className="list-group-item list-group-item-success text-dark">
        Customer ID: {profile.id}
      </li>
      <li className="list-group-item list-group-item-info text-dark">
        Customer Email: {profile.email}
      </li>
      <li className="list-group-item list-group-item-danger text-dark">
        Customer PhoneNumber: {profile.vip ? profile.phoneNumber : null}
      </li>
    </ul>
  );
};

export default CustomerProfile;
