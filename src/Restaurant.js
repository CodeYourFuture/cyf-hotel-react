import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="container">
      <h3>Restaurant Orders</h3>
      <ul className="text-style">
        <Order orderType="Pizzas" />
        <Order orderType="salads" />
        <Order orderType="Chocolate Cakes" />
      </ul>
    </div>
  );
};

export default Restaurant;
