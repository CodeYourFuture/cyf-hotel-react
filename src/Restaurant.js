import React from "react";
import Order from "./components/Order.js";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderStyle="Pizzas" />
        <Order orderStyle="Salads" />
        <Order orderStyle="Chocolate Cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
