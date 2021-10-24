import React from "react";

import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order className="orders" orderType={"Pizzas"} />
        <Order className="orders" orderType={"Salads"} />
        <Order className="orders" orderType={"Chocolate Cakes"} />
      </ul>
    </div>
  );
};

export default Restaurant;
