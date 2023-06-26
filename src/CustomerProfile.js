import React, { useEffect, useState } from "react";

function CustomerProfile({id}) {
  const [profile, setProfile] = useState(id)

  useEffect(()=>{
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res=>res.json())
      .then(data=>setProfile(data));
  },[id])

  return (
    <>
      {profile ? (
        <div className="App-content">
        <h4>Customer profile</h4>
            <ul>
              <li>Customer ID: {profile.id}</li>
              <li>VIP: {profile.vip ? "Yes" : "No"}</li>
              <li>Email: {profile.email}</li>
              <li>Tel: {profile.phoneNumber}</li>
            </ul>
        </div>
      ) : null}
    </>

  );
}

export default CustomerProfile;