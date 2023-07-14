import React, { useState } from "react";
//import p from "react-bootstrap/p";
import OrdData from "../data/orders.json";

const Delivery = ({ prop }) => {
  const [buy, setBuy] = useState(false);
  const [buyCoffee, setBuyCoffee] = useState(false);
  const [buySoup, setBuySoup] = useState(false);

  function delivery() {
    let clickBuy = OrdData.filter(by => {
      if (by.pizza.toLowerCase().includes(by.pizza)) {
        console.log(by.od1);
        return by.od1;
      } else {
        return null;
      }
    });
    setBuy(clickBuy);
  }
  function deliveryCoffee() {
    let clickCoffee = OrdData.filter(by => {
      if (by.coffee.toLowerCase().includes(by.coffee)) {
        console.log(by.od2);
        return by.od2;
      } else {
        return null;
      }
    });
    setBuyCoffee(clickCoffee);
  }
  function deliverySoup() {
    let clickSoup = OrdData.filter(by => {
      if (by.soup.toLowerCase().includes(by.soup)) {
        console.log(by.soup);
        return by.od3;
      } else {
        return null;
      }
    });
    setBuySoup(clickSoup);
  }
  return (
    <div className="delivery-img">
      {/* <div className="order-img"> */}
      <div className="span-img">
        <img src={prop.image} alt="img1" />
        <p onClick={delivery}>{prop.pizza}</p>
      </div>
      <div className="span-img">
        <img src={prop.image2} alt="img1" />
        <p onClick={deliveryCoffee}>{prop.coffee}</p>
      </div>
      <div className="span-img">
        <img src={prop.image3} alt="img1" />
        <p onClick={deliverySoup}>{prop.soup}</p>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Delivery;
