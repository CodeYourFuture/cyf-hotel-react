import React, { useState, useEffect } from "react";

function CustomerProfile({ id }) {
  const [bookingProfile, SetBookingProfile] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => SetBookingProfile(data));
  }, [id]);
  return (
    <ul>
      Customer Profile Details
      <li> {bookingProfile.id} </li>
      <li> {bookingProfile.email} </li>
      <li> {bookingProfile.vip ? "Yes" : "No"} </li>
      <li> {bookingProfile.phoneNumber}</li>
    </ul>
  );
}

export default CustomerProfile;
