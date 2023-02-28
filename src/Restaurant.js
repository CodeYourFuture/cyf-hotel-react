import React, {useState} from "react";

const Restaurant = () => {
  // const pizzas = 0;
  let orders = 0

  const setOrders = () => {
    orders = useState(0)
  }

  return (
    <div className="restaurantOrders">
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders} <button className="btn btn-primary">Add</button>
        </li>
      </ul>
    </div>
  );
};

const orderOne = () =>{
  onclick (setOrders+=1) 
}


export default Restaurant;
