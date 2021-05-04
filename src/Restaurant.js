import React from "react";

import Order from "./Order";
const Restaurant = props => {
  return (
    <div className="restaurant">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order {...props} orderType="pizzas" />
        <Order {...props} orderType="salads" />
        <Order {...props} orderType="chocolate fizz buzz roll fantazy" />
      </ul>
    </div>
  );
};

export default Restaurant;
