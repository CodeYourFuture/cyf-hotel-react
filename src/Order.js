import React, {useState} from "react";
import Button from "./RestaurentButton";

const Order = ({orderType}) =>{
 const [order, setOrder] = useState(0);
  function orderOne() {
    setOrder(order + 1);
  }
return(

<li>
  {orderType}: {order}
  <Button orderOne={orderOne} />
</li>
)
}

export default Order;