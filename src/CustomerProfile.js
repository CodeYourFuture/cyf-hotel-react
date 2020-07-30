import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  console.log(id);
  const [user, setUser] = useState([]);
  console.log(user);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUser(data);
      });
  }, [id]);
  return (
    <div>
      Custromer {id} profile
      <ul>
        <li> Customer email : {user.email}</li>
        <li> Customer phone number : {user.phoneNumber}</li>
        <li> Customer VIP : {user.vip ? "Yes" : "No"}</li>
      </ul>
    </div>
  );
};
export default CustomerProfile;
