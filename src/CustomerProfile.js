import React from "react";

// Renders customers booking information when their Show Profile button is clicked or hides when clicked a second time
const CustomerProfile = props => {
  return props.id ? <div>{`Customer ${props.id} Profile: `}</div> : <div />;
};

export default CustomerProfile;
