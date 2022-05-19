import React from "react";
import RestaurantButton from "./RestaurantButton";
const Order = () => {
  const orderTypes = [`Pizzas`, `Pasta`, `Sandwiches`, `Salads`];

  return (
    <>
      {orderTypes.map(order => (
        <li>
          <RestaurantButton className="btn btn-primary" orderType={order} />
        </li>
      ))}
    </>
  );
};

export default Order;
