import RestaurantButton from "./RestaurantButton";
import React, { useState } from "react";
const Order = props => {
  const [order, setOrder] = useState(0);
  function orderOne() {
    setOrder(order + 1);
  }
  const cssStyle = {
    width: "300px",
    marginTop: "4px",
    display: "flex",
    //flexDirection:'row',
    // justifyContent:'space between',
    fontStyle: "italic",
    fontSize: "18px"
  };
  return (
    <span style={cssStyle}>
      <li style={{ width: "150px" }}>
        {props.orderType}: {order}
      </li>

      <li>
        <RestaurantButton order={orderOne} />
      </li>
    </span>
  );
};
export default Order;
