import React from "react";
import Order from "./Order";

function Restaurant(props) {
  return (
    <div>
      {" "}
      <h3>Restaurant Orders</h3>
      <ul className="list-group">
        <Order />
        <Order orderType={"salade"} />
        <Order orderType={"chocolate cake"} />
      </ul>
    </div>
  );
}
export default Restaurant;
