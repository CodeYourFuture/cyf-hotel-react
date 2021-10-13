import React from "react";
import RestaurantButton from "./RestaurantButton";
import Order from "./Order";
const Restaurant = () => {
  return (
    <ul>
      <Order orderType={"Pizzas"} />
      <Order orderType={"Salad"} />
    </ul>
  );
};

export default Restaurant;
