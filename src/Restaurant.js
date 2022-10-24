import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order ordertype="Pizzas" />
        <Order ordertype="Salads" />
        <Order ordertype="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
