import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="container">
      <h3>Restaurant Orders</h3>

      <ul className="list-group">
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
