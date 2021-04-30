/* eslint-disable indent*/
import React from "react";
import RestaurantButton from "./RestaurantButton";
import Order from "./Order";
import { useState } from "react";
const Restaurant = () => {
  // const pizzas = 0;

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate" />
      </ul>
    </div>
  );
};

export default Restaurant;
