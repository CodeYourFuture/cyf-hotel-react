import React from "react";
//import RestaurantButton from "./RestaurantButton";
import Order from "./Order.js";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          <Order orderType="Pizzas" />
        </li>
        <li>
          <Order orderType="Salads" />
        </li>
        <li>
          <Order orderType="Chocolate" />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
