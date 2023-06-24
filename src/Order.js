import React, { useState }from 'react';
import RestaurantButton from './RestaurantButton';
import './App.css';

const Order = ({ orderType }) => {
   const [orders, setOrders] = useState(0);

   const orderOne = () => {
    setOrders(orders + 1);
   };

   return (
    <li>
     <span className="order-type">  {orderType}</span>: {orders} <RestaurantButton onClick={orderOne} />
    </li>
   );
};

export default Order;