import React, { useState }from "react";

const Order = (props) => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <li>
      {props.orderType}: {orders}
      <RestaurantButton orderit={orderOne} />
    </li>
  );

}

const RestaurantButton = (props) => {
  return (
  <button className="btn btn-primary" onClick={props.orderit}>Add</button>
  );
}
const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="pizzas" />
        <Order orderType="salads" />
        <Order orderType="chocolate" />
      </ul>
    </div>
  );
};

export default Restaurant;
