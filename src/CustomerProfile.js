import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [profile, setProfile] = useState(false);

  const profileSearch = () => {
    if (profile !== props.id) return setProfile(props.id);
    else return setProfile(false);
  };

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${profile}`)
      .then(res => res.json())
      .then(data => {
        if (profile === props.id) return setProfile(data);
      });
  }, [profile, props.id]);

  return (
    <div>
      <td>
        <button onClick={profileSearch} className="btn btn-primary">
          Show Profile
        </button>
      </td>
      <td>
        <ul className={profile ? "d-block" : "d-none"}>
          <li>id: {profile.id}</li>
          <li>title: {profile.title}</li>
          <li>first name: {profile.firstName}</li>
          <li>surname: {profile.surname}</li>
          <li>email: {profile.email}</li>
          <li>phone number: {profile.phoneNumber}</li>
          <li>vip: {`${profile.vip}`}</li>
        </ul>
      </td>
    </div>
  );
};

export default CustomerProfile;
