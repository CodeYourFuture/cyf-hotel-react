import React from "react";
import Order from "./Order.js";

const Restaurant = () => {
  return (
    <div className="container text-center">
      <h3>Restaurant Orders</h3>
      <ul className="list-unstyled">
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
