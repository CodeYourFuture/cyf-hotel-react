import React from "react";
import Order from "./Order";

function Restaurant() {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          <Order orderType="Pizzas" />
          <Order orderType="Salads" />
          <Order orderType="Chocolate Cake" />
        </li>
      </ul>
    </div>
  );
}

export default Restaurant;
