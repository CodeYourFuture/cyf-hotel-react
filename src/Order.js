import React from "react";

const useState = React.useState;

function Order(props) {
  let [order, setOrder] = useState(0);
  function orderIncrement() {
    setOrder(order + 1);
  }
  return (
    <div>
      <li>
        {props.orderType}: {order}
      </li>
      <button onClick={orderIncrement}>Add</button>
    </div>
  );
}
export default Order;
