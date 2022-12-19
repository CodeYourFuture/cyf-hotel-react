import React from "react";
import Order from "./Component/Order";
import RestaurantButton from "./Component/RestaurantButton ";

const Restaurant = () => {
  // const [orders,setOrders] = useState(0)

  // const pizzas = 0;
  return (
    <div>
      <h3 className="main-text">Restaurant Orders</h3>
      <ul className="order-countiner">
        <Order orderType="pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate Cake" />
        {/* <li>
          Pizzas: {pizzas} < RestaurantButton  onClick = {orderOne}  /> 
        </li> */}
      </ul>
    </div>
  );
};

export default Restaurant;
