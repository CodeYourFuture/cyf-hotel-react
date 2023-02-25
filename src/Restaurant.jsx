import React from "react";
import { useState } from "react";


const Restaurant = () => {
  let [order, setOrders] = useState(0);

  //same as the line above
  // const state = useState(0)
  // const order = state[0];
  // const setOrder = state[1];



  // function Counter() {
  //   const [count, setCount] = useState(0);

  //   return <p>You clicked {count} times</p>;
  // }
  const pizzas = 0;
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {order} <button onClick= {()=>{setOrders(order +1)}} className="btn btn-primary">Add</button>
        </li>
        </ul>
    </div>);
};

export default Restaurant;




// Instructions: At the moment, the number of pizzas a guest can order is static and set to 0, even if they click on the 'Add' button. 
// We will change that in the following to let a guest add more pizzas to their order. 

// First, declare a new state variable orders along with the function to set the orders state setOrders. 
// The initial value of the orders state should be 0. Use the new orders variable instead of the pizzas variable (that you can now delete).

// Hint: You need to use the React function useState to create a state variable. 
// Remember to import the function at the top with import React, {useState} from "react";.

// Test: Verify the number of ordered pizzas it still 0 on the screen.