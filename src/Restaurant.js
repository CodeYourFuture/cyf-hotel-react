import React from "react";

import Order from "./myComponents/Order";

const Restaurant = () => {
  return (
    <div style={{ height: "300px" }}>
      <div>
        <h3>Restaurant Orders</h3>
        <ul style={{ display: "flex" }}>
          <Order orderType="Pizzas" />
          <Order orderType="Salads" />
          <Order orderType="Chocolate" />
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;
