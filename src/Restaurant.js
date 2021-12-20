import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="orders">
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          <Order orderType={"Pizzas"} />
          <Order orderType={"JollofRice"} />
          <Order orderType={"Salad"} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
