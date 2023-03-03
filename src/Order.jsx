import React, {useState} from "react";

const Order = ({ orderType }) => {
    const [orders, setOrders] = useState(0);
    const orderOne = () => {
    setOrders(orders + 1);
  };

  const removeOrder = () => {
    setOrders(orders - 1);
  };
  return(
  <div>
      
      <ul>
        <li>
          {/* --------increament --------- */}
         {orderType}: {orders}{" "}
          <button className="btn btn-primary" onClick={orderOne}>
            Add
          </button>

          {/* --------decreament --------- */}
          <button className="btn btn-primary" onClick={removeOrder}>
            Remove
          </button>
        </li>
      </ul>
    </div>
    );
}

export default Order