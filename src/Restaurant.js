import React, { useState } from "react";
import Order from "./Order.js";

const Restaurant = () => {
  return (
    <div>
      <ul>
        <li>
          <Order orderType="pizzas" />
        </li>
        <li>
          <Order orderType="salads" />
        </li>
        <li>
          <Order orderType="chocolate cake" />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
