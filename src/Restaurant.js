import React, { useState } from "react";

export const Restaurant = () => {
  return (
    <div className="restuarant-container">
      <h3 className="restaurant-header">Restaurant Orders</h3>
      <ul className="list-of-food">
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
    <li className="food-item">
      {props.food}: {orders}
      <span> </span>
      <RestaurantButton setOrdersFunction={setOrdersFunction} />
    </li>
  );
}

export default Restaurant;
