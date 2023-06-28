import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import Order from "./Order"

const Restaurant = () => {
  //  const orderList=[
  //   "pizza","salads","Chocolate cake"
  //  ]
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order name="pizza" />
        <Order name="salads" />
        <Order name="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
