import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul class="order">
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate Cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
