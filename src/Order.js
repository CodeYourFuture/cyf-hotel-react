import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [order, setOrder] = useState(0);

  function orderOne() {
    setOrder(order + 1);
  }
  function orderRemove() {
    // setOrder(order - 1);

    order > 0 ? setOrder(order - 1) : setOrder(0);
  }
  return (
    <div className="col-sm-3">
      <div className="restaurant-card">
        <img
          className="restaurant-image"
          src={props.image}
          alt={props.orderType}
        />
        {props.orderType} {order}{" "}
        <RestaurantButton
          className={"btn btn-primary"}
          handleClick={orderOne}
          context={"add"}
        />
        <RestaurantButton
          className={"btn btn-warning"}
          handleClick={orderRemove}
          context={"remove"}
        />
      </div>
    </div>
  );
};

export default Order;
