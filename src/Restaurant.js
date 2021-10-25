import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="app-content container text-center">
      <h3>Restaurant Orders</h3>
      <ul className="container">
        <Order orderType={"Pizzas"} />
        <Order orderType={"Salads"} />
        <Order orderType={"Chocolate cake"} />
      </ul>
    </div>
  );
};

export default Restaurant;
