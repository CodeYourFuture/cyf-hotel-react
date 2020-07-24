import React from "react";
import "./Restaurant.css";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3 className="margin">Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
