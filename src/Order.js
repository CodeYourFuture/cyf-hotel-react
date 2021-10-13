import React, { useState } from "react";

function Order(props) {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    return setOrders(currentOrder => {
      return currentOrder + 1;
    });
  }

  return (
    <li>
      {props.orderType}: {orders}{" "}
      <button onClick={() => orderOne()} className="btn btn-primary">
        Add
      </button>
    </li>
  );
}

export default Order;
