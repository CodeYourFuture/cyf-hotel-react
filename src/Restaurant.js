import React from "react";
import Order from "./components/Order";
const typeOrder = ["Salad", "Chocolate"];
const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        {typeOrder.map((v, i) => {
          return <Order key={i} orderType={v} />;
        })}
      </ul>
    </div>
  );
};

export default Restaurant;
