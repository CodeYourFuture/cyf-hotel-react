import React, { useEffect, useState } from "react";

const CustomerProfile = props => {
  const [customerProfile, setCustomerProfile] = useState({});
  const URL = "https://cyf-react.glitch.me/customers/";

  useEffect(() => {
    fetch(`${URL}${props.id}`)
      .then(res => res.json())
      .then(data => setCustomerProfile(data));
  }, [props.id]);

  return (
    <div>
      <h1>Showing Guest {customerProfile.id} profile</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <p>Guest Id:</p>
          {customerProfile.id}
        </li>
        <li className="list-group-item">
          <p>Email:</p>
          {customerProfile.email}
        </li>
        <li className="list-group-item">
          <p>Phone No:</p>
          {customerProfile.phoneNumber}
        </li>
        <li className="list-group-item">
          <p>VIP:</p>
        </li>
      </ul>
    </div>
  );
};

export default CustomerProfile;
