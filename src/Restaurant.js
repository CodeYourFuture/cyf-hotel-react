import React from "react";
import Order from "./Order.js";

const Restaurant = () => {
  return (
    <div className="restaurant">
      <h3>Restaurant Orders</h3>
      <ul className="foodItems">
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate Cake" />
        <Order orderType="Ribs" />
        <Order orderType="Chips" />
        <Order orderType="Burger" />
      </ul>
    </div>
  );
};

export default Restaurant;
