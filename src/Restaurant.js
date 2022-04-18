import React, { useState } from "react";

const Restaurant = () => {
  return (
    <div className="restaurant">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order />
      </ul>
    </div>
  );

  // Pizza Order Component
  function Order() {
    const [order, setOrder] = useState(0);

    function orderOne() {
      setOrder(current => {
        return current + 1;
      });
    }

    return (
      <li className="pizzas">
        Pizzas: {order}
        <RestaurantButton handleClick={orderOne} />
      </li>
    );
  }

  // Button Component
  function RestaurantButton(props) {
    return (
      <button className="btn btn-primary" onClick={props.handleClick}>
        Add
      </button>
    );
  }
};

export default Restaurant;
