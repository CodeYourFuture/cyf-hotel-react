import Orders from "./Orders";
import React from "react";

const Restaurant = () => {
  // const pizzas = 0;
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Orders orderType="Salads" />
        <Orders orderType="Pizza" />
        <Orders orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
