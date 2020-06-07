import React from "react";
import Order from "./Order.js";

const Restaurant = () => {
  return (
    <div id="Div_Restaurant_JSX" className="Div_Restaurant_CSS">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizza" />
        <Order orderType="Salad" />
        <Order orderType="Chocolate Cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
