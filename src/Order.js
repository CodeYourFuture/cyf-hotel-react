import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };

  const deleteOne = () => {
    setOrders(orders - 1);
  };
  return (
    <div className="order-item">
      <div className="item-name">
        <span>{props.orderType} :</span>
        <span>{orders >= 0 ? orders : 0}</span>
      </div>
      <RestaurantButton
        context="Add"
        addOrder={orderOne}
        removeOrder={deleteOne}
      />
    </div>
  );
};

export default Order;
