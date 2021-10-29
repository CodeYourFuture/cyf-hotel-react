import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [order, setOrder] = useState(0);

  const added = props => {
    setOrder(order + 1);
  };
  const reduceHandle = props => {
    setOrder(order - 1);
  };
  const cancelled = props => {
    setOrder(0);
  };
  return (
    <div className="d-flex ">
      <li className="m-2  pt-3 ">
        {props.orderType} {order}
      </li>

      <RestaurantButton
        order={added}
        reduce={reduceHandle}
        cancel={cancelled}
      />
    </div>
  );
};

export default Order;
