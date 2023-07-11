import React from "react";
const CustomerProfile = ({ id, first, room, email, days }) => {
  return (
    <div className="profile">
      <div className="div-1"> {id} </div>
      <div className="div-1"> {first}</div>
      <div className="div-1">{room}</div>
      <div className="div-1">{email}</div>
      <div className="div-1">{days}</div>
    </div>
  );
};
export default CustomerProfile;
