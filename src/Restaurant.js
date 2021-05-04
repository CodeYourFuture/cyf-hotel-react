import React from "react";
import { Order } from "./components";

const Restaurant = () => {
  return (
    <div className="text-center">
      <h4>Restaurant Orders</h4>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
