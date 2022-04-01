import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="order-box-wrapper">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Desserts" />
      </ul>
    </div>
  );
};

export default Restaurant;
