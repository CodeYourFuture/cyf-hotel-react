import React, { useState } from "react";

const Restaurant = () => {
  const [order, setOrder] = useState(0);
  // const pizzas = 0;

  function orderOne() {
    setOrder(current => {
      return current + 1;
    });
  }

  function RestaurantButton(props) {
    return (
      <button className="btn btn-primary" onClick={props.handleClick}>
        Add
      </button>
    );
  }

  return (
    <div className="restaurant">
      <h3>Restaurant Orders</h3>
      <ul>
        <li className="pizzas">
          Pizzas: {order} <RestaurantButton handleClick={orderOne} />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
