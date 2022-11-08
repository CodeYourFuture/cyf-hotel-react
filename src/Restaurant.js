import React from "react";
import Order from "./components/Order";
const Restaurant = () => {
  const pizza = 0;
  const salads = 0;
  const chocolate_cake = 0;

  return (
    <div className="container">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType={pizza} />
        <Order orderType={salads} />
        <Order orderType={chocolate_cake} />
      </ul>
    </div>
  );
};

export default Restaurant;
