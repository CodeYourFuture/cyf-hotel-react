import React from "react";
import { useState } from "react";
import Button from "./OrderButton";

const Orders = props => {
  const [orders, setOrders] = useState(0);

  const eachOrder = () => {
    setOrders(orders + 1);
  };

  return (
    <div>
      <li>
        {props.orderType}: {orders}
        <Button onClick={eachOrder} />
      </li>
    </div>
  );
};

export default Orders;
