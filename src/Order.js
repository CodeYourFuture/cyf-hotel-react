import React from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = React.useState(0);

  function orderOne() {
    setOrders(prevOrders => prevOrders + 1);
  }

  return (
    <li className="restaurant-list-item">
      {props.orderType} : {orders} <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;
