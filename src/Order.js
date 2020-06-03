import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [order, setOrder] = useState(0);

  function orderOne() {
    setOrder(order + 1);
  }
  return (
    <div>
      <li>
        {props.orderType} {order} <RestaurantButton handleClick={orderOne} />
      </li>
    </div>
  );
};

export default Order;
