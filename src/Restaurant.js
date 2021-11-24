import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Chips" />
        <Order orderType="Coke" />
      </ul>
    </div>
  );
};

export default Restaurant;
