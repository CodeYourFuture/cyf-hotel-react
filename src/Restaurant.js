import React from "react";
import Order from "./Order";
import RestaurantButton from "./RestaurantButton";
const Restaurant = () => {
  // const pizzas = 0;
  // const [orders,setOrders] = useState (0)
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate Cake" />
        {/* <li>
          Pizzas: {pizzas} <RestaurantButton onClick={orderOne}/>
        </li> */}
      </ul>
    </div>
  );
};

export default Restaurant;
