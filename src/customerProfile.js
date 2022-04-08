import React from "react";
const CustomerProfile = props => {
  return (
    <div>
      <p>
        Customer ID :<span className="text-danger h4"> {props.id}</span> <br />
        Email : {props.email} <br />
        VIP : {props.vip} <br />
        Phone : {props.phone}
      </p>
    </div>
  );
};

export default CustomerProfile;
