import React from "react";

export default function CustomerProfile({ customerProfile }) {
  return (
    <div className="cont-profile">
      <h2>Profile</h2>
      {customerProfile.length !== 0 ? (
        <ul>
          <li>Id: {customerProfile.id}</li>
          <li>Email: {customerProfile.email}</li>
          <li>Vip: {customerProfile.vip ? "Yes" : "No"}</li>
          <li>Phone no: {customerProfile.phoneNumber}</li>
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}
