import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [order, setOrder] = useState(0);

  function orderOne() {
    setOrder(order + 1);
  }

  return (
    <div>
      <li className="d-flex justify-content-between">
        {orderType}: {order} <RestaurantButton const clickEvent={orderOne} />
      </li>
    </div>
  );
};

export default Order;
