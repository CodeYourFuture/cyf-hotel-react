import React, { useState } from "react";
import Order from "./Order";

const Restaurant = () => {
  const food = ["BLT Sandwich", "Caesar Salad", "Tuna Melt"];
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
