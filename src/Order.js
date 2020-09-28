import React, { useState } from "react";

const Order = ({ orders, orderType }) => {
  return (
    <li>
      {orderType}: {orders}
    </li>
  );
};

export default Order;
