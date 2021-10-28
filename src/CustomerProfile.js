import React, { useState, useEffect } from "react";

function CustomerProfile(props) {
  //console.log(props.id)
  // State variable of profile. the initial value is an empty object
  const [profile, setProfile] = useState({});
  useEffect(() => {
    // the id we got from searchResult and we passed as prop in CustomerProfile is used in URL.
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // update profile and get what we want
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
        {/* use the profile */}
        ID: {profile.id} <br /> Email: {profile.email} <br /> VIP: {profile.vip}
      </p>
    </div>
  );
}

export default CustomerProfile;
