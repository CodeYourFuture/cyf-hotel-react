import React, { useState } from "react";
import RestaurantButtons from "./RestaurantButtons";

const Order = ({ orderType }) => {
  const [order, setOrder] = useState(0);

  const addHandler = () => {
    setOrder(order + 1);
  };

  const removeHandler = () => {
    setOrder(order - 1);
  };

  return (
    <div className="restaurantOrders">
      <li>
        <h2>
          {orderType}: {order}
        </h2>

        <RestaurantButtons orderOne={addHandler} />
        <button className="btn-primary" onClick={removeHandler}>
          remove
        </button>
      </li>
    </div>
  );
};

export default Order;
