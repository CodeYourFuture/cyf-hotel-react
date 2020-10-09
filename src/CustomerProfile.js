import React, { useEffect, useState } from "react";

function CustomerProfile({ id }) {
  const [profileData, setProfileData] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(response => response.json())
      .then(data => setProfileData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <ul>
      <li>Customer ID: {profileData.id}</li>
      <li>Title: {profileData.title}</li>
      <li>First Name: {profileData.firstName}</li>
      <li>Surname: {profileData.surname}</li>
      <li>email: {profileData.email}</li>
      <li>VIP? {profileData.vip ? "Yes" : "No"}</li>
      <li>Phone number: {profileData.phoneNumber}</li>
    </ul>
  );
}

export default CustomerProfile;
