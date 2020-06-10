import React, { useState } from "react";

const Order = ({ orderType }) => {
  const [order, setOrder] = useState(0);

  return (
    <div className="orders">
      <div>
        <li>
          {orderType}: {order}
        </li>
      </div>

      <div>
        <button
          className="btn btn-primary"
          onClick={() => {
            setOrder(order + 1);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};
export default Order;
