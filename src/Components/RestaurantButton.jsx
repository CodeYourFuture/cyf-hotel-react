import React, { useState } from "react";

const RestaurantButton = props => {
  function orderOne() {
    return setOrders(pizzaOrder => pizzaOrder + 1);
  }
  const [orders, setOrders] = useState(0);
  return (
    <>
      {props.orderType} {" : "} {orders}
      {"  "}
      <button onClick={orderOne} className="btn btn-primary">
        Add
      </button>
    </>
  );
};

export default RestaurantButton;
