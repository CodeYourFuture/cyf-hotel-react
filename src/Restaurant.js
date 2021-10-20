import React from "react";
import Order from "./Order";

function Restaurant(props) {
  return (
    <div>
      <p>
        {" "}
        <h3>Restaurant Orders</h3>
      </p>
      <ul className="list-group">
        <Order />
        <Order orderType={"salade"} />
        <Order orderType={"chocolate cake"} />
      </ul>
    </div>
  );
}
export default Restaurant;
