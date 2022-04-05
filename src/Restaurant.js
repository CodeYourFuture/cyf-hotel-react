import React, { eseState } from "react";

const Restaurant = props => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        {/* Pizzas: {pizzas} <button className="btn btn-primary">Add</button> */}
        <Order orderType={"Pizzas"} />
      </ul>
    </div>
  );
};

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(currentCount => currentCount + 1);
  }
  return (
    <li>
      {orderType}:{orders} <Restaurant handleClick={orderOne} />
    </li>
  );
};

const RestaurantButton = props => {
  return <button onClick={(props.handleClick = "btn btn-primary")}>Add</button>;
};

export default Restaurant;
