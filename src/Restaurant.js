import React from "react";
import Order from "./Order";
// add more order and select dy number incresment
function Restaurant(props) {
  return (
    <div className="restuarant">
      {" "}
      <h3>Restaurant Orders</h3>
      <ul className="list-group">
        <Order orderType={"vegan"} />
        <Order orderType={"salade"} />
        <Order orderType={"chocolate cake"} />
      </ul>
    </div>
  );
}
export default Restaurant;
