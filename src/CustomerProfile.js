import React, { useEffect, useState } from "react";
function CustomerProfile({ getId }) {
  let [profile, setProfile] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${getId}`)
      .then(response => response.json())
      .then(data => setProfile(data))
      .catch(err => console.error(err));
  }, [getId]);

  return (
    <div>
      <ul>
        <h4> Id : {profile.id} </h4>
        <h4> First Name : {profile.firstName}</h4>
        <h4> surname : {profile.surname}</h4>
        <h4> Email : {profile.email}</h4>
        <h4> Vip : {profile.vip ? "yes" : "No"}</h4>
        <h4> Contact : {profile.phoneNumber}</h4>
      </ul>
    </div>
  );
}
export default CustomerProfile;
