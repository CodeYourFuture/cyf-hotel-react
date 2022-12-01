import React from "react";
import Order from "./Order";
//import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  //const pizzas = 0;

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
