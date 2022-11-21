import React from "react";
import Order from "./Orders";

const Restaurant = () =>
{
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType = "Pizzas"/>
        <Order orderType = "Salads"/>
        <Order orderType = "Chocolate cake"/>
      </ul>
    </div>
  );
};

export default Restaurant;
