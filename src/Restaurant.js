import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul className="text-style">
        <Order />
      </ul>
    </div>
  );
};

export default Restaurant;
