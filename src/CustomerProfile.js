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
        <ul>
          <li>Customer Id:{profileData.id} </li>
          <li>Email:{profileData.email} </li>
          <li>Phone Number:{profileData.phoneNumber} </li>
          <li>VIP:{profileData.vip} </li>
        </ul>
        {/* <p>hello from profile{buttonId}</p>
             <p>Customer ID : {profileData.id}</p> */}
      </div>
    );
  } else {
    return null;
  }
}

export default CustomerProfile;
