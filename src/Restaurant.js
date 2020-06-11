import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="restaurant-container">
      <hr />
      <h4>Restaurant Orders</h4>
      <hr />
      <ul>
        <li>
          <Order orderType="Pizzas" />
        </li>
        <li>
          <Order orderType="Salads" />
        </li>
        <li>
          <Order orderType="Chocolate cake" />
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Restaurant;
