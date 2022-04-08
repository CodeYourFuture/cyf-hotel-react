import React from "react";

// I could make the loading JSX look like the loaded Profile's shape, colour, size to make it less disorienting when switching inbetween profiles.

const CustomerProfile = ({ profile, profileLoaded }) => {
  if (profile && profileLoaded) {
    console.log("customer data has loaded!");
    return (
      <div className="prof text-white">
        <h2>Customer Profile</h2>
        <ul>
          <li>{`ID: ${profile.id}`}</li>
          <li>{`Email: ${profile.email}`}</li>
          <li>{`VIP: ${profile.vip}`}</li>
          <li>{`Phone: ${profile.phoneNumber}`}</li>
        </ul>
      </div>
    );
  } else if (profile && !profileLoaded) {
    console.log("Customer data is loading...");
    return <p>Customer data is loading...</p>;
  } else {
    return null;
  }
};

export default CustomerProfile;
