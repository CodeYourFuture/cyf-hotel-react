import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);

  const OrderOne = props => {
    setOrders(orders + 1);
  };
  const decreaseOrder = () => {
    setOrders(orders - 1);
  };
  const cancel = () => {
    setOrders(0);
  };

  return (
    <div>
      {props.orderType.map((item, i) => (
        <li key={i}>
          {item} {orders} {OrderOne}
        </li>
      ))}
      <RestaurantButton
        orderOne={OrderOne}
        decreaseOrder={decreaseOrder}
        cancel={cancel}
      />

      {/* <li>
        {props.orderType}: {orders}
        <RestaurantButton
          orderOne={OrderOne}
          decreaseOrder={decreaseOrder}
          cancel={cancel}
        />
      </li> */}
    </div>
  );
};

export default Order;
