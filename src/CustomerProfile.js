import React from "react";

function CustomerProfile(props) {



    return (
      <div>{props.id && <p>Customer_ID : {props.id}</p>}</div>
    );
}
export default CustomerProfile;