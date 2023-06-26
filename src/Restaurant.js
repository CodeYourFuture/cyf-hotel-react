import React from "react";
import Order from "./Order";

const Restaurant = () => {

  return (
    <div className="App-content pb-5">
      <div className="container">
        <h4>Restaurant Orders</h4>
        <ul className="orders">
          <Order orderType="Pizzas" />
          <Order orderType="Salads" />
          <Order orderType="Chocolate cake" />
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;
