import React from "react";

const Restaurant = () => {
  const orders = 0;
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Orders: {orders} <button className="btn btn-primary">Add</button>
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
