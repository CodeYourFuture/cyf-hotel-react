import React from "react";
import Order from "./Order.js";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul className="list-group m-3">
        <Order orderType="Pizza" />
        <Order orderType="Salad" />
        <Order orderType="Cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
