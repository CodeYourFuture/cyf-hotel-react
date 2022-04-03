import React, { useState } from "react";

function Order({ orders, orderType }) {
  const [order, setOrder] = useState(0);
  const orderOne = () => {
    setOrder(() => order + 1);
  };
  return (
    <li>
      {orderType}: {orders}
      {order}
      <button className="btn btn-primary" onClick={orderOne}>
        Add
      </button>
    </li>
  );
}

export default Order;
