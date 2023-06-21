import React, { useState } from "react";
import RestaurantButton from './RestaurantButton';
import Order from './Order';

const Restaurant = () => {

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
          <Order orderType="Pizzas"/>
          <Order orderType="Salads"/>
          <Order orderType="Chocolate cake"/>
      </ul>
    </div>
  );
};

export default Restaurant;
