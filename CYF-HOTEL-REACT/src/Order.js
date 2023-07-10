import React, { useState } from 'react';
import RestaurantButton from './RestaurantButton';

function Order({orderType}) {
  const [Orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(Orders => Orders + 1);
  };

  return (
    <li>
      <orderType />
      {orderType}: {Orders} <RestaurantButton handleClick={orderOne} />
    </li>
  );
}

export default Order;
