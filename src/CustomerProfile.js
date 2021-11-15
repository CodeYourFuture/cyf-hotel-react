import React from "react";
function CustomerProfile(props) {
  return (
    <div class="border">
      Customer {props.id} profile
      <button onClick={props.onClose}>x</button>
    </div>
  );
}

export default CustomerProfile;
