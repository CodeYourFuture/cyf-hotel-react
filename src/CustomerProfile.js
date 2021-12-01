import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [profile, setProfile] = useState({
    id: null,
    email: null,
    vip: null,
    phoneNumber: null
  });

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        setProfile(data);
      });
  }, [props.id]);

  console.log(profile);
  return (
    <td>
      <p className="customer-para">
        Customer Id: {profile.id}
        <br />
        Email: {profile.email}
        <br />
        VIP: {profile.vip ? "true" : "false"}
        <br />
        Phone: {profile.phoneNumber}
      </p>
    </td>
  );
};

export default CustomerProfile;
