import React from "react";
import Order from "./components/Order.js";

const Restaurant = () => {
  const orderTypes = ["Pizza", "Salads", "Chocolate Cake"];

  return (
    <div>
      <h3>Restaurant Orders</h3>
      {orderTypes.map((orderType, i) => (
        <Order key={i} orderType={orderType} />
      ))}
    </div>
  );
};

export default Restaurant;
