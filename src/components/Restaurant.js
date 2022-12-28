import React from "react";
import { Order } from "./Order";

export const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order key="pizzas" orderType="Pizzas" />
        <Order key="salads" orderType="Salads" />
        <Order key="cake" orderType="Chocolate Cake" />
      </ul>
    </div>
  );
};
