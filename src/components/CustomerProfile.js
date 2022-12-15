import React, { useState, useEffect } from "react";

function CustomerProfile(props) {
  const [profile, setProfile] = useState("");

  useEffect(() => {
    if (props.id) {
      fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
        .then(data => data.json())
        .then(data => setProfile(data))
        .catch(error => console.log(error));
    }
  }, [props.id]);

  return profile ? (
    <div>
      <h2>Customer Profile</h2>
      <span>{profile.id}</span>
      <span>{profile.title}</span>
      <span>{profile.firstName}</span>
      <span>{profile.surname}</span>
      <span>{profile.email}</span>
      <span>{profile.vip}</span>
      <span>{profile.phoneNumber}</span>
    </div>
  ) : (
    ""
  );
}

export default CustomerProfile;

// let zss;
// if (props.id !== undefined && props.id == true) {
//   zss = (
//     <div>
//       {" "}
//       <h2>Customer Profile</h2> <p>ddd</p>{" "}
//     </div>
//   );
// } else {
//   zss = "";
// }

// let s = props.id ? 'za' : 'em'
