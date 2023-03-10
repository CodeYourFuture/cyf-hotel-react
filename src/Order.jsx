import React, {useState} from "react";

const Order = ({ orderType }) => {
    const [orders, setOrders] = useState(0);
    const orderOne = () => {
    setOrders(orders + 1);
  };

  const removeOrder = () => {
    setOrders(orders - 1);
  };

  const resetOrder = () => {
    if(orders > 0) {
      setOrders(0)
    }
    ;
  };
  return(
  <div>
      
      <ul>
        <li className="btnOrder">
          {/* --------increament --------- */}
         {orderType}: {orders}{" "}
          <button className="btn btn-primary orderBtn" onClick={orderOne}>
            Add
          </button>

          {/* --------decreament --------- */}
          <button className="btn btn-primary" onClick={removeOrder}>
            Remove
          </button>

          {/* --------reset --------- */}
          <button className="btn btn-primary" onClick={resetOrder}>
            Reset
          </button>
        </li>
      </ul>
    </div>
    );
}

export default Order