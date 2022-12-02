import React from "react";

function CustomerProfile(prop) {
  return (
    <div>
      <p>{`ID: ${prop.id}`}</p>
      <p>{`Email: ${prop.email}`}</p>
      <p>{`VIP member: ${prop.vip}`}</p>
    </div>
  );
}

export default CustomerProfile;
