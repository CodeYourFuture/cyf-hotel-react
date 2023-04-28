import React from "react";
const CustomerProfile = ({ id, first, title, email, night }) => {
  return (
    <div className="profile">
      <div className="div-1">{id}</div>
      <div className="div-1">{first}</div>
      <div className="div-1">{title}</div>
      <div className="div-1">{email}</div>
      <div className="div-1">{night}</div>
    </div>
  );
};
export default CustomerProfile;
