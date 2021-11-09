import React, { useState, useEffect } from "react";

function CustomerProfile(props) {
  //console.log(props.id)
  const [profile, setProfile] = useState({});
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProfile({
            id: data.id,
          email: data.email,
          vip: data.vip.toString()
        });
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <div>
      <h1>Show Profile for</h1>
      <p>
        ID: {profile.id} <br /> Email: {profile.email} <br /> VIP: {profile.vip}
      </p>
    </div>
  );
}

export default CustomerProfile;