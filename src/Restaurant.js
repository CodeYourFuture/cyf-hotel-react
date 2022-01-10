import React from "react";
import Order from "./Order";

const Restaurant = () => {
  // const pizzas = 0;
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizza" />
        <Order orderType="Salad" />
        <Order orderType="Chocolate cake " />
      </ul>
    </div>
  );
};

export default Restaurant;
