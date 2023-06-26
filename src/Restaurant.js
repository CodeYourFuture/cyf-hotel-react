import React from "react";
import Order from "./Order.jsx";

const Restaurant = () => {
  return (
    <div className="list-group text-center">
      <h3>Restaurant Orders</h3>
      <ul className="list">
        <Order orderType="Pizzas" />
        <Order orderType="Chocolate cake" />
        <Order orderType="Salads" />
      </ul>
    </div>
  );
};

export default Restaurant;