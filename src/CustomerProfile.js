import React, { useEffect, useState } from "react";
function CustomerProfile({ buttonId }) {
  const [profileData, setProfileData] = useState();
  useEffect(() => {
    if (buttonId) {
      fetch(`https://cyf-react.glitch.me/customers/${buttonId}`)
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
          setProfileData(data);
        });
    }
  }, [buttonId]);
  if (profileData) {
    return (
      <div>
        <h3>Customer Profile</h3>
        <div className="profile-wrapper">
          <p>Customer Id:{profileData.id} </p>
          <p>Email:{profileData.email} </p>
          <p>Phone Number:{profileData.phoneNumber} </p>
          <p>Customer is {profileData.vip ? "VIP" : "not VIP"} </p>
        </div>
        {/* <p>hello from profile{buttonId}</p>
             <p>Customer ID : {profileData.id}</p> */}
      </div>
    );
  } else {
    return null;
  }
}

export default CustomerProfile;
