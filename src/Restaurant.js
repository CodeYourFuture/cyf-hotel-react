import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          <Order/>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
