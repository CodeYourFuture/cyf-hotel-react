import React, { useState } from "react";

function Salads(params) {
  const [Orders, setOrders] = useState(0);
  if (Orders === -1) {
    setOrders(0);
  }
  return (
    <div className="resturant-container">
      <ul className="order-list">
        <li className="list">
          Salads: {Orders}{" "}
          <button
            className="btn btn-primary"
            onClick={() => setOrders(Orders + 1)}
          >
            {" "}
            +
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setOrders(Orders - 1)}
          >
            {" "}
            -
          </button>
        </li>
      </ul>
    </div>
  );
}
export default Salads;
