import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton.js";

const Order = (props) => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders((prevOrders) => prevOrders + 1);
  };

  return (
    <li className="list-group-item">
      {props.orderType}:{" "}
      <span className="badge badge-primary badge-pill">{orders}</span>{" "}
      <RestaurantButton orderOne={orderOne} />
    </li>
  );
};

export default Order;

// The code imports React and the useState hook from the "react" library. The useState hook is a built-in React hook that
// allows functional components to manage state. The code also imports a component called "RestaurantButton" from a file
// called "RestaurantButton.js". This component likely represents a button used to place an order in the restaurant. The
// functional component Order is defined, which takes in props as its parameter. The props object is used to pass data
// from the parent component to this component. Inside the Order component, the useState hook is used to initialize a
// state variable called orders with an initial value of 0. The useState hook returns an array with two elements: the
// current state value (orders) and a function (setOrders) to update that state value. The orderOne function is defined,
// which increments the orders state value by 1 using the setOrders function provided by the useState hook. It uses the
// functional form of setOrders, which takes the previous state value (prevOrders) as input and returns the updated
//state value. The return statement renders JSX, which represents the structure and content of the component. It returns
// a <li> element with the className "list-group-item". Inside the <li> element, it displays the props.orderType,
// which represents the type of the order, likely passed as a prop from the parent component. Next, it renders a <span>
// element with the className "badge badge-primary badge-pill", which is likely used for styling purposes. Inside the
// <span> element, it displays the value of the orders state variable, representing the number of orders. Finally, it
// renders the RestaurantButton component and passes the orderOne function as a prop called orderOne. This allows the
// RestaurantButton component to trigger the orderOne function when the button is clicked. The Order component is
// exported as the default export using the export default Order; statement, allowing it to be imported and used in
// other files.
