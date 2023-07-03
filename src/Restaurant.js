import React from "react";

import "./Restaurant.css";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="Restaurant">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salad" />
        <Order orderType="Chocolate Cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
