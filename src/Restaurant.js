import React from "react";
import { Order } from "./Order";

const Restaurant = () => {
  return (
    <div className="restaurant-menue">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType={"Pizzas"} />
        <Order orderType={"Salads"} />
        <Order orderType={"Chocolate cake"} />
      </ul>
    </div>
  );
};

export default Restaurant;
