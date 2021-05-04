import React, { useState } from "react";
import RestaurantButton from "./components/RestaurantButton";
import Order from "./components/Order";

const Restaurant = () => {
  return (
    <div>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
