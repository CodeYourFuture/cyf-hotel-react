import React from "react";
import Orders from "./Orders";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Orders orderType="Pizzas" />
        <Orders orderType="Salads" />
        <Orders orderType="Chocolate Cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
