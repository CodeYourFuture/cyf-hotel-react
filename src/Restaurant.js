import React from "react";
import Order from "./Order";

const menu = ["Pizzas", "Salads", "Chocolate Cake"];
const Restaurant = () => {
  return (
    <div className="App-order">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType={menu} />
      </ul>
    </div>
  );
};

export default Restaurant;
