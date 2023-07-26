import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  let [order, setOrders] = useState(0);

  function orderOne() {
    setOrders(order + 1);
  }

  function deleteOne() {
    if (order !== 0) {
      setOrders(order - 1);
    }
  }

  const pizzas = 0;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {orderType}: {order}
      <RestaurantButton orderOne={orderOne} deleteOne={deleteOne} />
    </li>
  );
};

export default Order;
