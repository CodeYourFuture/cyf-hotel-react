import React, { useState } from "react";

export const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order food={"Pizza"} />
        <Order food={"Salad"} />
        <Order food={"Chocolate cake"} />
      </ul>
    </div>
  );
};

function RestaurantButton(props) {
  return (
    <button onClick={props.setOrdersFunction} className="btn btn-primary">
      Add
    </button>
  );
}

function Order(props) {
  const [orders, setOrders] = useState(0);

  function setOrdersFunction() {
    setOrders(orders + 1);
  }

  return (
    <li>
      {props.food}: {orders}
      <RestaurantButton setOrdersFunction={setOrdersFunction} />
    </li>
  );
}
export default Restaurant;
