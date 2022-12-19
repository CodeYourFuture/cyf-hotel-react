import React from "react";

export default function CustomerProfile({ customerProfile }) {
  return (
    <div className="list-group-item active">
      <h4>Customer Profile</h4>
      {customerProfile && (
        <ul className="list-group" style={{ listStyleType: "upper-roman" }}>
          <li>Id: {customerProfile.id}</li>
          <li>Email: {customerProfile.email}</li>
          <li>Vip: {customerProfile.vip ? "Yes" : "No"}</li>
          <li>Phone no: {customerProfile.phoneNumber}</li>
        </ul>
      )}
    </div>
  );
}
