import React from "react";
import Orders from "./Order";

const Restaurant = () => {
  return (
    <div id="restautant">
      <h3>Restaurant Orders</h3>
      <ul>
        <Orders />
      </ul>
    </div>
  );
};
export default Restaurant;
