import React, { Component, useState } from "react";

const CustomerProfile = ({ profile }) => {
  return (
    <div className="profile-info">
      <p>ID:{profile.id}</p>
      <p>Email:{profile.email}</p>
      <p>VIP:{profile.vip ? "yes" : "no"}</p>
      <p>Phone Number:{profile.phoneNumber}</p>
    </div>
  );
};

export default CustomerProfile;
