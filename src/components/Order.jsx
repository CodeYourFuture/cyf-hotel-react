import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import PropTypes from "prop-types";

const Order = props => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <li>
      {props.orderType} {orders} <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

Order.propTypes = {};

export default Order;
