import React, { useState, useEffect } from "react";
function CustomerProfile(props) {
  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    if (props.userClick) {
      fetch(
        `https://hamidreza-hotel-server.glitch.me/customers/${props.userClick}`
      )
        .then(response => response.json())
        .then(data => setProfileData(data));
      console.log(profileData);
    } else {
      fetch(`https://hamidreza-hotel-server.glitch.me/customers/1`)
        .then(response => response.json())
        .then(data => setProfileData(data));
      console.log(profileData);
    }
  }, [props.userClick]);
  return (
    <div>
      <ul className="ul-profile row" key={profileData.id}>
        <li className="lg-col-3 sml-col-6">{profileData.id}</li>
        <li className="lg-col-3 sml-col-6">{profileData.firstName}</li>
        <li className="lg-col-3 sml-col-6">{profileData.surname}</li>
        <li className="lg-col-3 sml-col-6">{profileData.email}</li>
        {profileData.vip ? <li>{profileData.phoneNumber}</li> : null}
      </ul>
    </div>
  );
}

export default CustomerProfile;
