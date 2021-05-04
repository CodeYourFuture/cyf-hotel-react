import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Chips" />
        <Order orderType="Cupcakes" />
      </ul>
    </div>
  );
};

export default Restaurant;
