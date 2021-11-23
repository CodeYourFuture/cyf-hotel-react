import React from "react";

import { useState } from "react";
const Order = props => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(order => order + 1);
    //console.log(`Number of ${props.orderType} added`, orders + 1);
  };

  const removeOne = () => {
    if (orders >= 1) {
      setOrders(order => order - 1);
    }
  };
  //console.log(`Number of ${props.orderType} added`, orders - 1);

  return (
    <li className="restaurantOrder">
      {props.orderType}: {orders}{" "}
      <button className="btn btn-primary" onClick={orderOne}>
        Add One
      </button>
      {/* button to remove one item */}
      <button className="btn btn-primary" onClick={removeOne}>
        Remove One
      </button>
    </li>
  );
};

export default Order;
