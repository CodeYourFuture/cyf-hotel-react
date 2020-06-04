import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [pizzas, setPizzas] = useState(0);
  const [orders, setOrders] = useState(0);
  const [price, setPrice] = useState(0);
  const [bill, setBill] = useState(price);

  const orderOne = () => {
    setOrders(orders + 1);
    setPrice(props.price + price);
  };
  return (
    <tr>
      <td>{props.orderType}</td>
      <td>{props.price}</td>
      <td>{orders}</td>
      <td>{price}</td>
      <td>
        <RestaurantButton onClick={orderOne} />
      </td>
    </tr>
  );
};
export default Order;
