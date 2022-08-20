import React from "react";
import "./Restaurant.css";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
       <div id="buttons">
          <Order orderType="Pizzas" />
          <Order orderType="Salads" />
        </div>
        <Order orderType="Chocolate Cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
