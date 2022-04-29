import React, { useState } from "react";

function Pizzas(params) {
  const [Orders, setOrders] = useState(0);
  if (Orders === -1) {
    setOrders(0);
  }
  return (
    <div className="resturant-container">
      <ul className="order-list">
        <li>
          Pizzas: {Orders}{" "}
          <button
            className="btn btn-primary "
            onClick={() => setOrders(Orders + 1)}
          >
            {" "}
            +
          </button>
          <button
            className="btn btn-primary  sebutton"
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
export default Pizzas;
