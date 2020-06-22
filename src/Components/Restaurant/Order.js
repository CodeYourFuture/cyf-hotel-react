import React, { useState } from "react";

const Order = ({ orderType }) => {
  const [order, setOrder] = useState(0);
  const [qty, setQty] = useState(10);

  return (
    <div className="orders">
      <div>
        <ul>
          <li>
            {orderType}: {order}
          </li>
        </ul>
      </div>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => {
            setOrder(order + 1);
            setQty(qty);
          }}
        >
          Add
        </button>
      </div>
      {/* <div>Price: £ {qty}</div> */}
    </div>
  );
};
export default Order;
