import React, {useState} from "react";
import { BiAddToQueue } from 'react-icons/bi';
import { IoIosRemoveCircle } from 'react-icons/io';
import { RxReset } from 'react-icons/rx';
import "./order.css"

const Order = ({ orderType }) => {
    const [orders, setOrders] = useState(0);
    const orderOne = () => {
    setOrders(orders + 1);
  };

  const removeOrder = () => {
    setOrders(orders - 1);
        if(orders <= 0){
        setOrders(0)
    }
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
          <div className="contain">
            <div className="orderFood">
              {orderType}: {orders}{" "}
            </div>
         
            <div className="buttonOrder">
              <button className="btn btn-primary orderBtn addBtn" onClick={orderOne}>
                <BiAddToQueue size={22} onClick={orderOne}/> Add
              </button>

              {/* --------decreament --------- */}
              <button className="btn btn-primary removeBtn" onClick={removeOrder}>
                <IoIosRemoveCircle size={22} onClick={removeOrder}/>
                Remove
              </button>

              {/* --------reset --------- */}
              <button className="btn btn-primary resetBtn" onClick={resetOrder}>
                <RxReset size={20} onClick={resetOrder}/>
                Reset
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    );
}

export default Order