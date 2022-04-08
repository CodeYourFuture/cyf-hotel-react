import React, { useState, useEffect } from "react";

function CustomerProfile({ id }) {
  const [profile, setProfile] = useState("");

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => setProfile(data));
  }, [id]);

  return (
    <li style={({ alignText: "center" }, { listStyleType: "none" })}>
      Customer Profile:
      <br />
      ID: {id}
      <br />
      Email: {profile.email}
      <br />
      Phone Number: {profile.phoneNumber}
      <br />
      VIP:{" "}
      {profile.vip === true
        ? `Yes, ${profile.title} ${profile.firstName} ${
            profile.surname
          } is in a list.`
        : `Sorry, ${profile.title} ${profile.firstName} ${
            profile.surname
          } isn't in a list.`}
    </li>
  );
}

export default CustomerProfile;
