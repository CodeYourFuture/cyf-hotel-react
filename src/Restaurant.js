import React from "react";
import Order from "./Order";
import "./Restaurant.css";

const Restaurant = () => (
  <div className="orders">
    <h3>Restaurant Orders</h3>
    <ul>
      <Order orderType="Pizzas" />
      <Order orderType="Salads" />
      <Order orderType="Chocolate cake" />
    </ul>
  </div>
);

export default Restaurant;
