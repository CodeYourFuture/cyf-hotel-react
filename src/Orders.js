import React, { useState } from "react";
import Resturantbutton from "./Resturantbutton";

export default function Orders({ orderType }) {
  const [order, setOrder] = useState(0);
  function orderOne() {
    setOrder(order + 1);
  }
  return (
    <div>
      <li>
        {orderType}:{order}
        <Resturantbutton buttonOrderProps={orderOne} />
      </li>
    </div>
  );
}
