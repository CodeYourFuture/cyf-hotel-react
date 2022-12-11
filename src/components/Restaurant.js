import React from "react";
import Order from "./Order";

const Restaurant = ({ orderType }) => {
  return (
    <div className="restaurant-order">
      <h4>Restaurant Orders</h4>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
