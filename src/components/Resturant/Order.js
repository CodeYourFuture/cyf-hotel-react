import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
import classes from "./Order.module.css"

const Order = (props) => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders((prevOrder) => prevOrder + 1);
  };
  return (
    <li className="mt-2">
      <img  src={props.src} style={{height:200, width:220}}/>
      <span className="mx-2 my-2">
        {`${props.orderType} : `}<span class="badge badge-pill badge-light">{orders}</span>
      </span>
      <RestaurantButton className="btn btn-primary btn-md" onClick={orderOne} />
    </li>
  );
};

export default Order;
