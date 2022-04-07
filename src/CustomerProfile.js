import React, { useEffect, useState } from "react";

function CustomerProfile(props) {
  const [profile, setProfile] = useState();
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        setProfile(data);
      });
  }, [props.id]);

  return (
    <>
      <p>Customer {props.id} Profile</p>
      {profile ? (
        <ul>
          <li>ID: {profile.id}</li>
          <li>Email: {profile.email}</li>
          <li>Contact: {profile.phoneNumber}</li>
          {profile.vip === true && <li>Vip</li>}
        </ul>
      ) : (
        <></>
      )}
    </>
  );
}

export default CustomerProfile;
