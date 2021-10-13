import React, { useState } from "react";

function Order(props) {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    return setOrders(currentOrder => {
      return currentOrder + 1;
    });
  }

  return (
    <li className="list-group-item d-flex  align-items-start card flex-row justify-content-between">
      {props.orderType}:
      <h5>
        <span className="badge bg-warning rounded-pill bg-waring">
          {orders}
        </span>
      </h5>
      <button onClick={() => orderOne()} className="btn btn-primary">
        Add
      </button>
    </li>
  );
}

export default Order;
