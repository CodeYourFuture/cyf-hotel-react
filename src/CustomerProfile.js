import React, { useEffect, useState } from "react";
const CustomerProfile = props => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    if (props.i) {
      console.log(props.i);
      fetch(`https://cyf-react.glitch.me/customers/${props.i}`)
        .then(response => response.json())
        .then(data => {
          setProfile(data);
        });
    }
  }, [props.i]);
  if (!props.i) return <></>;
  return (
    <div>
      <p>Customer {props.i} Profile</p>
      {profile ? (
        <ul>
          <li>Id:{profile.id}</li>
          <li>Email:{profile.email}</li>

          {profile.vip ? <li>VIP:{profile.vip.toString()}</li> : ""}
          {profile.vip ? <li>{profile.phoneNumber}</li> : ""}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};
export default CustomerProfile;
