import React from "react";
import Order from "./components/Order";

const Restaurant = () => {
  
  return (
    <div className="restaurant-orders">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
