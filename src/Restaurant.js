import React, {useState} from "react";
import Order from "./Order"
const Restaurant = () => {
  const pizzas = 0;
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate Cake" />
      
      </ul>
    </div>
  );
};

export default Restaurant;
