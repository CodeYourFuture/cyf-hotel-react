import React, { useState } from "react";

export default function Order({ orderType, img }) {
  const [orders, setOrders] = useState(0);
  function deleteItem() {
    setOrders(prevOrder => (prevOrder > 0 ? orders - 1 : 0));
  }
  function addItem() {
    setOrders(orders + 1);
  }
  return (
    <li className="orderCard">
      <img src={require(`../data/${img}`)} alt="icon" />
      <p>
        {orderType}: {orders}
      </p>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button className="btn btn-primary" onClick={deleteItem}>
          -
        </button>
        <button className="btn btn-primary" onClick={addItem}>
          +
        </button>
      </div>
    </li>
  );
}
