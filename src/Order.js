import React, { useState } from "react";

function Order(props) {
  const [order, setOrder] = useState(0);
  return (
    <li>
      {props.orderType}: {order}{" "}
      <button
        className="btn btn-primary"
        onClick={() => setOrder(order => order + 1)}
      >
        Add
      </button>
    </li>
  );
}

export default Order;
