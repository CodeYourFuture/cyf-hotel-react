import React from "react";
import "./CustomerText.css";

function CustomerText({ profileData }) {
  return (
    <div>
      <ul className="list-group guest-card">
        Customer #ID {profileData.id}
        <li className="list-group-item">&#9993; {profileData.email}</li>
        <li className="list-group-item">&#9742; {profileData.phoneNumber}</li>
        <li className="list-group-item">
          &#129485; VIP: {profileData.vip ? "Yes" : "No"}
        </li>
      </ul>
    </div>
  );
}

export default CustomerText;
