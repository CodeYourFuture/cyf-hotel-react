import React from "react";
import Order from "./Order";
import "./Restaurant.css";

const Restaurant = () => (
  <div className="restaurant">
    <h3>Restaurant Orders</h3>
    <ul>
      <Order orderType="Pizzas" />
      <Order orderType="Salads" />
      <Order orderType="Chocolate Cake" />
    </ul>
  </div>
);

export default Restaurant;
