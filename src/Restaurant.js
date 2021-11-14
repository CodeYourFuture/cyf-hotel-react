import React from "react";
import Order from "./Order";

const Restaurant = () => {
  //const pizzas = 0;
  return (
    <div className="food-orders-container">
    <h3>Restaurant Orders:</h3>
      <ul>
      <Order orderType={"Pizzas"} />
        <Order orderType={"Chinese"} />
        <Order orderType={"Chocolate cake"} />
        <Order orderType={"Indian"} />
      </ul>
    </div>
  );
};

export default Restaurant;
