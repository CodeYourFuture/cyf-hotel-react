import React, { useState } from "react";
import Order from "./Order.js";

const Restaurant = () => {
  return (
    <div>
      <h3 class="Orders">Restaurant Orders</h3>
      <ul class="orderList">
        <Order orderType={"Pizzas"} />
        <Order orderType={"Salads"} />
        <Order orderType={"Chocolate cake"} />
      </ul>
    </div>
  );
};

export default Restaurant;
