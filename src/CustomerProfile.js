// import { useState } from "react";
// import { useEffect } from "react";
import React, { useState, useEffect } from "react";

const CustomerProfile = ({id}) => {

  const [profile, setProfile] = useState(null);
  
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProfile(data);
        console.log(id);
      })
      .catch((error) => {
        console.error(error);
      });
    
  }, [id]);

//   const { results } = props;

  return profile ? (
    <div>
      <p>Customer ID:{profile.id}</p>
      <p>Customer Name:{profile.firstName} {profile.surname}</p>
      <p>Customer E-mail:{profile.email}</p>
    </div>
  ) : (
    id && <p>loading profile....</p>
  );
};


export default CustomerProfile;
