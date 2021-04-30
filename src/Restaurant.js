import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="orders">
      <h3>Restaurant Orders</h3>
      <ul className="menuItems">
        <Order orderType="Pizzas" />
        <Order orderType="Salad" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
