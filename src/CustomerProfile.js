import React from "react";
import RestaurantButton from "./Button";
export default function CustomerProfile({ id, email, vip, phoneNumber }) {
  return (
    <div>
      {email && (
        <ul>
          <h5 class="modal-title">Profile</h5>
          <li>Id: {id}</li>
          <li>Email: {email}</li>
          <li>Vip: {vip ? "Yes" : "No"}</li>
          <li>Phone no: {phoneNumber}</li>
          {/* <button onClick={()=> close(false)}> Close </button> */}
          <li>
            {" "}
            <RestaurantButton close="close" />{" "}
          </li>
        </ul>
      )}
    </div>
  );
}
