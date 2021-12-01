import React from "react";
import Order from "./Order.js";

const Restaurant = () => {
  return (
    <div>
      <h3 className="Caption">Restaurant Orders</h3>
      <ul className="Orders">
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
