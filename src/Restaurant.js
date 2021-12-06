import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="restaurant-container">
      <div className="restaurant-text">
        <h3>Restaurant Orders</h3>
      </div>
      <div className="food-order-list">
        <ul>
          <Order orderType="Pizzas" />
          <Order orderType="Salads" />
          <Order orderType="Chocolate cake" />
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;
