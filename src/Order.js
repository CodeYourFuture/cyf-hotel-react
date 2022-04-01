import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [oders, setOders] = useState(0);

  function orderOne() {
    setOders((order) => {
      return oreder + 1
    });
  }

  return (
    <div>
      <RestaurantButton handleClick={orderOne} />
    <span>  pizzas:   {oders}   {props.orderType} </span>
    </div>
  );
};
export default Order;
