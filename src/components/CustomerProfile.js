import React from "react";

function CustomerProfile({ id }) {
  return <div>{id !== -1 ? `Customer ${id} Profile` : ""}</div>;
}

export default CustomerProfile;
