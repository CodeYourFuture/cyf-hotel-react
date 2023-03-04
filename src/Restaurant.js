import React, { useState } from "react";
import Order from "./Order";

const Restaurant = () => {
  let food = ["Pizzas", "Salads", "Chocolate cake"];
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        {food.map((x, index) => {
          return <Order key={index} orderType={x} />;
        })}
      </ul>
    </div>
  );
};

export default Restaurant;
