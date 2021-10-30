import React, { useState, useEffect } from "react";

function CustomerProfile(props) {
  //console.log(props.id)
  // State variable of profile. the initial value is an empty object
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    // the id we got from searchResult and we passed as prop in CustomerProfile is used in URL.
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // update profile and get what we want
        setProfile(data);
      })
      .catch(error => console.log(error));
  }, [props.id]);
  return (
    <div>
      <h1>Show Profile for</h1>
      <ul>
        <li>ID: {profile.id}</li>
        <li>
          Name: {profile.firstName} {profile.surname}
        </li>
        <li>VIP: {profile.vip ? "Yes" : "No"}</li>
        <li>Phone No.: {profile.phoneNumber}</li>
        <li>Email: {profile.email}</li>
      </ul>
    </div>
  );
}

export default CustomerProfile;
