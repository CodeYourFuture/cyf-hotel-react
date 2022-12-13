import React from "react";
import Order from "./Order";
const Restaurant = () => {
  // const pizzas = 0;
  return (
    <div className="container">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order />
      </ul>
    </div>
  );
};

export default Restaurant;
