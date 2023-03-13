import React from "react";

function CustomerProfile(props) {
  return (
    <ul>
      <li key={props.profile.id}>Customer {props.profile.id} Profile</li>
      <li key={props.email}>Customer email: {props.profile.email}</li>

      <li key={props.profile.vip}>
        Customer: {props.profile.vip ? "VIP" : "Normal"}
      </li>

      <li key={props.phoneNumber}>
        Customer phone number: {props.profile.phoneNumber}
      </li>
    </ul>
  );
}

export default CustomerProfile;
