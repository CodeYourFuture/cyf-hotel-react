import React from "react";

export default function RestaurantButton({ orderOneProp }) {
  //   const [orders, setOrders] = useState(0);

  return (
    <div>
      <button className="btn btn-primary" onClick={() => orderOneProp()}>
        Add
      </button>
    </div>
  );
}
