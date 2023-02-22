import React, { useState } from "react";
import ".";

const Order = props => {
  return props.orderType.map((food, index) => (
    <List food={food} index={index} />
  ));
};

const List = ({ food, index }) => {
  const [orders, setOrders] = useState(0);
  const addOne = () => {
    setOrders(orders + 1);
  };

  return (
    <li key={index}>
      {food} : {"   "}
      {orders}{" "}
      <button className="btn btn-primary" onClick={addOne} key={index}>
        Add
      </button>
    </li>
  );
};
export default Order;
