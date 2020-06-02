import React from "react";
import Order from "./order";

const Restaurant = () => {
  return (
    <div className="orders">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order />
      </ul>
    </div>
  );
};

export default Restaurant;
