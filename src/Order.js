import React, { useState } from "react";
// import RestaurantButton from "./RestaurantButton";

function Order(props) {
  const [order, setOrder] = useState(0);
  function incraseOrder() {
    let addOne = order + 1;
    setOrder(addOne);
  }

  function decraseOrder() {
    let minusOne = order - 1;

    order >= 1 ? setOrder(minusOne) : setOrder(0);
  }
  return (
    <div className="restaurantOrder">
      <button className="app-btn" onClick={incraseOrder}>
        {" "}
        Add {props.orderType}{" "}
      </button>
      <div className="order-items">
        {props.orderType}: {order}{" "}
      </div>
      <button className="app-btn" onClick={decraseOrder}>
        Deleate {props.orderType}{" "}
      </button>
    </div>
  );
}
export default Order;
