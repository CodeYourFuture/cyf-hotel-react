import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <Order orderType="Pizzas" />
      <Order orderType="Salads" />
      <Order orderType="Chocolate cake" />
      <Order orderType="Soft Drinks" />
    </div>
  );
};

export default Restaurant;
