import React from "react";
import OrdData from "../data/orders.json";
import Delivery from "./Delivery";
import HolderOrder from "../components/HolderOrder";

const Order = () => {
  return (
    <div className="btn-order">
      <div className="btn-orders">
        {OrdData.map((od, i) => (
          <div className="orders" key={i}>
            <Delivery prop={od} />
          </div>
        ))}
      </div>
      <div className="holder">
        <HolderOrder />
      </div>
    </div>
  );
};
export default Order;
