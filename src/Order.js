import React, { useState } from "react";

const Order = prop => {
  const [order, setOrder] = useState(0);

  function orderOne() {
    setOrder(order => order + 1);
  }
  return (
    <li>
      {prop.orderType}
      {Order}
      {""}
      <h5>
        <span className="badge">{order}</span>
      </h5>
      <button onClick={() => orderOne()} className="btn btn-primary">
        Add
      </button>
    </li>
  );
};

export default Order;
