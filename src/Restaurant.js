import React from "react";
import Orders from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Orders orderType="Pizza" />
        <Orders orderType="Salads" />
        <Orders orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
