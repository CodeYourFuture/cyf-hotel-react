//import React, { useState } from "react";
import React from "react";
import Order from "./Order";

const Restaurant = () => {
  //const pizzas = 0;
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul className="add-list">
        <li>
          <Order orderType={"Pizzas"} />
        </li>
        <li>
          <Order orderType={"Salads"} />
        </li>
        <li>
          <Order orderType={"Chocolate cake"} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
