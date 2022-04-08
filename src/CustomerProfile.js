import React from "react";

const CustomerProfile = ({ profile }) => {
  return profile ? <p>Customer Profile ID: {profile} </p> : null;
};

export default CustomerProfile;
