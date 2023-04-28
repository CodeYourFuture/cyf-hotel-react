import React from "react";
import Order from "./Order";
function Restaurant(props) {
  return (
    <div className="restaurant">
      <h3>
        <em>Restaurant Orders</em>
      </h3>
      <div className="list-group">
        <Order />
      </div>
    </div>
  );
}
export default Restaurant;
