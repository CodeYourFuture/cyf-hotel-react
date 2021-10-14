import React, { useState } from "react";

function RestaurantButton(prop) {
  console.log(prop.orderNum);
  return (
    <button onClick={prop.orderNum} className="btn btn-primary">
      Add
    </button>
  );
}

function Order(prop) {
  let orderArray = prop.orderType;

  for (let index = 0; index < orderArray.length; index++) {
    const element = orderArray[index];
    console.log(element);

    const orders = 0;
    const [count, setOrders] = useState(orders);

    console.log(orderArray);

    function orderOne() {
      setOrders(1 + count);
    }

    console.log(count);

    return (
      <div>
        <ul>
          {orderArray.map(function(element, index) {
            return (
              <li>
                {orderArray[index]} : {count}{" "}
                <RestaurantButton orderNum={orderOne} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType={["Pizzas", "Salad", "Chocolate Cake"]} />
      </ul>
    </div>
  );
};

export default Restaurant;
