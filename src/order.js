import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [Orders, setOrder] = useState(0);
  function OrderOne() {
    setOrder(Orders + 1);
  }
  return (
    <li className="list-group-item d-flex justify-content-between ">
      {props.orderType}: {Orders}
      <RestaurantButton func={OrderOne} />
    </li>
  );
};
export default Order;