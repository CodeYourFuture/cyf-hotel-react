import React, { useState } from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="container">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType={"Pizzas"} />
        <Order orderType={"Salads"} />
        <Order orderType={"Chocolate"} />
      </ul>
    </div>
  );
};

export default Restaurant;
