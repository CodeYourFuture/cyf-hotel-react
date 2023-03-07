import React, { useState } from 'react';
import RestaurantButton from './RestaurantButton';

type PropsType = {
  orderType: string;
};

const Order = ({ orderType }: PropsType) => {
  const [orders, setOrders] = useState<number>(0);
  const orderOne = () => {
    setOrders((prev) => prev + 1);
  };
  return (
    <li className='list-group-item'>
      {orderType}: {orders} <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;
