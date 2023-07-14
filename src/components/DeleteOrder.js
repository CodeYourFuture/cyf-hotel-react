import React from "react";
import Popup from "reactjs-popup";
import Delivery from "./Delivery";

const DeleteOrder = () => (
  <Popup trigger={<button> Trigger</button>} position="right top">
    <div>Popup content here !!</div>
  </Popup>
);
export default DeleteOrder;
