import React, { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { IoIosRemoveCircle } from "react-icons/io";
import { RxReset } from "react-icons/rx";
import "./order.css";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };

  const removeOrder = () => {
    setOrders(orders - 1);
    if (orders <= 0) {
      setOrders(0);
    }
  };

  const resetOrder = () => {
    if (orders > 0) {
      setOrders(0);
    }
  };
  return (
    <div className="orders-summery">
      <div className="orderFood">
     <h3> {orderType}: {orders}</h3>  
      </div>
      <div className="btn-div">
        <button className="btn btn-primary orderBtn addBtn" onClick={orderOne}>
          <BiAddToQueue size={22} onClick={orderOne} /> Add
        </button>
        <button className="btn btn-primary removeBtn" onClick={removeOrder}>
          <IoIosRemoveCircle size={22} onClick={removeOrder} />
          Remove
        </button>
        <button className="btn btn-primary resetBtn" onClick={resetOrder}>
          <RxReset size={20} onClick={resetOrder} />
          Reset
        </button>
      </div>
      {/* <ul>
        <li className="btnOrder">
       
          <div className="contain">
            <div className="buttonOrder">
             
            </div>
          </div>
        </li>
      </ul> */}
    </div>
  );
};

export default Order;
