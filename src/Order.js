import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Order = props => {
  // useState
  const [orders, setOrders] = useState(0);
  // add order quantity handler
  function orderOne() {
    return setOrders(add => add + 1);
  }
  // remove order quantity handler
  function removeOne() {
    return setOrders(remove => (remove > 0 ? remove - 1 : 0));
  }
  // return statement of main order component
  return (
    <div className="orderAndButton">
      <li className="h5">
        {props.orderType} : {orders}
      </li>
      <RestaurantButton handleClick={orderOne} handleClickDown={removeOne} />
    </div>
  );
};
export default Order;
