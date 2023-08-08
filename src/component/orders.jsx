import React from "react";

const Order = ({ orderType, count, onIncrement }) => {
    return (
      <li className="order-item">
        <span className="order-type">{orderType}:</span>
        <span className="order-count">{count}</span>
        <button className="order-button" onClick={onIncrement}>
          Add
        </button>
      </li>
    );
  };
export default Order;
