import React from "react";
// import RestaurantButton from "./RestaurantButton";
import Order from "./Order";

const Restaurant = () => {
  // const [orders, setOrders] = useState(0);
  // const orderOne = () => {
  //   setOrders(orders + 1);
  // };
  return (
    <div>
      <ul>
        <Order orderType="Pizza" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
