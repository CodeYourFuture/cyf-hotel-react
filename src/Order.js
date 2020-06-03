import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [order, setOrder] = useState(0);

  function orderOne() {
    setOrder(order + 1);
  }
  function orderRemove() {
    setOrder(order - 1);
  }
  return (
    <div>
      <li>
        {props.orderType} {order}{" "}
        <RestaurantButton handleClick={orderOne} context={"add"} />
        <RestaurantButton handleClick={orderRemove} context={"remove"} />
      </li>
    </div>
  );
};

export default Order;
