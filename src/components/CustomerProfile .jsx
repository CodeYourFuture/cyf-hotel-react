import React from "react";
function CustomerProfile({ customerProfile }) {
  return (
    <div>
      <h1> Customer Profile</h1>
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
export default CustomerProfile;
