import React from "react";
import RestaurantButton from "./RestaurantButton";
let useState = React.useState;

const Order = props => {
  let [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <div className="order-container">
      <div className="order-box">
        <li className="order-item-list">
          {props.orderType}: {orders}
        </li>
        <RestaurantButton orderOne={orderOne} />
      </div>
    </div>
  );
};
export default Order;
