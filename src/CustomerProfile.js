import React, { useState, useEffect } from "react";
const CustomerProfile = props => {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => setProfile(data));
  }, [props]);
  if (profile !== null) {
    return (
      <>
        <div className="">
          <h3> Customer profile ID {props.id}</h3>
          <ul>
            <li>
              Fullname : {profile.firstName} {profile.surname}
            </li>
            <li>Phone Number : {profile.phoneNumber}</li>
            <li>Email : {profile.email}</li>
            <li className="">VIP</li>
          </ul>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default CustomerProfile;
