import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order ordertype="Pizzas" />
      </ul>
    </div>
  );
};

export default Restaurant;
