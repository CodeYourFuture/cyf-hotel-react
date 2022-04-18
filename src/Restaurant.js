import React, { useState } from "react";

const Restaurant = () => {
  return (
    <div className="restaurant">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType={"Pizzas"} />
        <Order orderType={"Salads"} />
        <Order orderType={"Chocolate cake"} />
        {/* Each time an <Order /> component is rendered inside this list
        it duplicates itself - each new render becomes an
        independent component on the page */}
      </ul>
    </div>
  );

  // Pizza Order Component
  function Order(props) {
    const [order, setOrder] = useState(0);

    function orderOne() {
      setOrder(current => {
        return current + 1;
      });
    }

    return (
      <li className="pizzas">
        {props.orderType}: {order}
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
