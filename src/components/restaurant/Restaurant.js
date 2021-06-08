import React from "react";
import Orders from "./Orders"

const Restaurant = () => {
  const pizzas = 0;
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <br />
      <ul style={{ listStyle: "none" }}>
        <Orders orderType="Pizza" />
        <br />

        <Orders orderType="Salads" />
        <br />

        <Orders orderType="Chocolate Cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
