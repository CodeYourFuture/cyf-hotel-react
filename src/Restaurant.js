import React, { useState } from "react";

function Order(prop) {
  let orderArray = prop.orderType;
  console.log(orderArray);

  for (let index = 0; index < orderArray.length; index++) {
    const element = orderArray[index];
    console.log(element);

    const [countA, setOrdersA] = useState(0);
    const [countB, setOrdersB] = useState(0);
    const [countC, setOrdersC] = useState(0);

    console.log(orderArray);

    function orderOne() {
      setOrdersA(countA + 1);
      console.log("countA : " + countA);
    }
    function orderTwo() {
      setOrdersB(1 + countB);
      console.log("countB : " + countB);
    }
    function orderThree() {
      setOrdersC(1 + countC);
      console.log("countC : " + countC);
    }

    return (
      <div>
        <ul>
          {orderArray.map(function(element, index) {
            const countArray = [countA, countB, countC];
            return (
              <li>
                {orderArray[index]} : {countArray[index]}{" "}
                <RestaurantButton
                  orderNum={[orderOne, orderTwo, orderThree]}
                  currentIndex={index}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function RestaurantButton(prop) {
  // console.log(prop);
  // console.log(prop.orderNum[prop.currentIndex]);
  // console.log(prop.currentIndex)
  return (
    <button
      onClick={prop.orderNum[prop.currentIndex]}
      className="btn btn-primary"
    >
      Add
    </button>
  );
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
