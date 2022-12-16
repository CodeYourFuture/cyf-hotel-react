import React from "react";
export default function CustomerProfile({ customerProfile }) {
  return (
    <div>
      <h5 class="modal-title">Profile</h5>

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
