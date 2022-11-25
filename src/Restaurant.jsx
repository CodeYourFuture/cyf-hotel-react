import React from "react";
import Order from "./Order.jsx";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul className="orders">
        <Order orderType={"Pizzas"} />
        <Order orderType={"Burgers"} />
        <Order orderType={"Salads"} />
        <Order orderType={"Deserts"} />
      </ul>
    </div>
  );
};

export default Restaurant;
