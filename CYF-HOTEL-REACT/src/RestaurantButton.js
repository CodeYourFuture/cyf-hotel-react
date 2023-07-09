import React, {useState} from 'react';


function RestaurantButton(props) {
  const [orders, setOrders] = useState(0);

  const orderOne = (props) => setOrders(orders => orders + 1);
  return (
    <div>
      <ul>
        <li>
          Pizzas: {orders} <button className="btn btn-primary" onClick={orderOne}>Add</button>
        </li>
      </ul>
    </div>
  )
}

export default RestaurantButton;

