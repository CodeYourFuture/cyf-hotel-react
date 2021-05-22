import React from "react";
import Order from "./Order";
const Restaurant = () => {
  let orderTypes = ["Pizzas", "Salads", "Chocolate cakes"];
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        {orderTypes.map(type => (
          <Order orderType={type} />
        ))}
      </ul>
    </div>
  );
};

export default Restaurant;
