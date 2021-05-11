import React from "react";
import Order from "./components/Order";

const Restaurant = () => {
  const orderTypeArr = ["Pizzas", "Salads", "Chocolate cake"];
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        {orderTypeArr.map((order, index) => (
          <Order key={index} orderType={order} />
        ))}
      </ul>
    </div>
  );
};

export default Restaurant;
