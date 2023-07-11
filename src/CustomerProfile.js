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
    <div className="extra-info">
      <p>Customer ID: {profile.id}</p>
      <p>Name: {profile.firstName} {profile.surname}
      </p>
      <p>E-mail: {profile.email}</p>
      {profile.vip ? <p>VIP</p> : "Not VIP"}
      <p>Mobile: {profile.phoneNumber}</p> 
    </div>
  ) : (
    id && <p>loading profile....</p>
  );
};


export default CustomerProfile;
