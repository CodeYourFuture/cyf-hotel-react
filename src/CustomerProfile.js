import React from "react";

const CustomerProfile = (props) => {
  return (
    <React.Fragment>
      {props.customerID && <p>Customer_ID : {props.customerID}</p>}
      {props.customerEmail && <p>Customer_Email: {props.customerEmail}</p>}
      {props.customerPhone && <p> Customer_Phone : {props.customerPhone}</p>}
      {props.customerVIP && <p>Customer_ VIP : true</p>}
    </React.Fragment>
  );
};

export default CustomerProfile;
