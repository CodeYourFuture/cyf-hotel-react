import React, { useState, useEffect } from "react";

const CustomerProfile = (props) => {
    return <div>{props.id}</div>;
//   const [profile, setProfile] = useState([]);
//   const { id, title, firstName, surname, email, vip, phoneNumber } = profile;

//   useEffect(() => {
//     const url = `https://cyf-react.glitch.me/customers/${props}`;
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         setProfile(data);
//       });
//   }, [props]);

//   return profile ? (
//     <div>
//       <h3>Customer {id} Profile</h3>
//       <ul>
//         <li>e-mail: {email} </li>
//         <li>VIP Status: {vip} </li>
//         <li>Contact Number: {phoneNumber} </li>
//       </ul>
//     </div>
//   ) : null;
};
export default CustomerProfile;