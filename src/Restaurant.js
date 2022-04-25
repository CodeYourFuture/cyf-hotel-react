import React, { useState } from "react";
import Pizzas from "./components/Pizzas";
import Salads from "./components/Salads";
import ChoclateCake from "./components/Chocolate cake";

const Restaurant = () => {
  return (
    <div className="resturant-container">
      <h3>Restaurant Orders</h3>
      <Pizzas />
      <Salads />
      <ChoclateCake />
    </div>
  );
};

export default Restaurant;
