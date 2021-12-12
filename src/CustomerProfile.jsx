import React from "react";
const CustomerProfile = props => {
  // this will get an id through props.customerID
  // then display the correct profile that corresponds
  // with that id.
  return props.customerID !== null ? (
    <>customer profile: ID - {props.customerID}</>
  ) : (
    <></>
  );
};
export default CustomerProfile;
