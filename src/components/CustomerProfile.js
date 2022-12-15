import React from "react";

function CustomerProfile(props) {
  return props.id ? (
    <div>
      <h2>Customer Profile</h2>
      <p>{props.id}</p>
      <p>dd</p>
      <p>ff</p>
      <p>gg</p>
    </div>
  ) : (
    ""
  );
}

export default CustomerProfile;

// let zss;
// if (props.id !== undefined && props.id == true) {
//   zss = (
//     <div>
//       {" "}
//       <h2>Customer Profile</h2> <p>ddd</p>{" "}
//     </div>
//   );
// } else {
//   zss = "";
// }

// let s = props.id ? 'za' : 'em'
