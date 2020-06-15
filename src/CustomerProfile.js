import React, { useState, useEffect } from "react";

function CustomerProfile(props) {
  const [profile, setProfile] = useState();
  useEffect(() => {
    fetch(`https://cyf-react.illicitonion.com/customers/${props.id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log(data.email);
        setProfile(data);
      });
  }, [props.id]);

  if (!profile) {
    return null;
  } else {
    return (
      <div>
        <p>Customer {props.id} Profile</p>
        <p>Customer email: {profile.email}</p>
        <p>VIP? {profile.vip ? <p>YES</p> : <p>NO</p>} </p>
        <p>Customer phone number: {profile.phoneNumber}</p>
      </div>
    );
  }
}

// function CustomerFetch(props) {
//     const [profile, setProfile] = useState(null);
//     useEffect(() => {
//       fetch(`https://cyf-react.glitch.me/customers/${props.id}`)

//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//           setProfile(data);
//         });
//     }, [props.id]);

//     if (!profile) {
//       return null;
//     } else {
//       return <BestPokemon pokemon={bestPokemon} />
//     }
//   }

export default CustomerProfile;
