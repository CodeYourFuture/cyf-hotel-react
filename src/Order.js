import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

function Order(props) {
  const [order, setOrder] = useState(0);

  const orderOne = () => {
    return setOrder(order + 1);
  };
  return (
    <div>
      <li className="resItem">
        {props.orderType}: {order} <RestaurantButton onClick={orderOne} />
      </li>
    </div>
  );
}

export default Order;
