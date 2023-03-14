import React from "react";

const CustomerProfile = ({
  id,
  firstName,
  surname,
  email,
  vip,
  phoneNumber
}) => {
  return (
    <div>
      <h3>
        Customer profile: {firstName} {surname} (Customer id {id})
      </h3>
      <ul>
        <li>Email: {email}</li>
        <li>Is VIP?: {vip ? "Yes" : "No"}</li>
        <li>Phone number: {phoneNumber}</li>
      </ul>
    </div>
  );
};

export default CustomerProfile;
