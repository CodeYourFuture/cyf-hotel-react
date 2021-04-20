import React from "react";
import Order from "./Order";
const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
