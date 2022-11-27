import Order from "./Order";
import React, { useState } from "react";

const Restaurant = () => {
  //const pizzas = 0;

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order />
      </ul>
    </div>
  );
};

export default Restaurant;
