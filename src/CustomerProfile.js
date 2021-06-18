import React, { useState } from "react";
const CustomerProfile = ({ profileID, bookings }) => {
  console.log(profileID);
  console.log(bookings);
  let profileClient;
  if (bookings) {
    profileClient = bookings.filter(booking => {
      return booking.id == profileID;
    });
  }
  console.log(profileClient);
  return (
    <div>
      {profileClient[0] && <h2>Customer {profileClient[0].id} Profile</h2>}
      {profileClient[0] && <h4>Customer ID:{profileClient[0].id}</h4>}
      {profileClient[0] && <h4>Title:{profileClient[0].title}</h4>}
      {profileClient[0] && <h4>Email:{profileClient[0].email}</h4>}
    </div>
  );
};
export default CustomerProfile;
