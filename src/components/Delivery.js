import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import OrdData from "../data/orders.json";

const Delivery = ({ prop }) => {
  const [buy, setBuy] = useState(false);
  const [buyCoffee, setBuyCoffee] = useState(false);
  const [buySoup, setBuySoup] = useState(false);

  function deliveryButton() {
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
        <Button onClick={deliveryButton}>{prop.pizza}</Button>
      </div>
      <div className="span-img">
        <img src={prop.image2} alt="img1" />
        <Button onClick={deliveryCoffee}>{prop.coffee}</Button>
      </div>
      <div className="span-img">
        <img src={prop.image3} alt="img1" />
        <Button onClick={deliverySoup}>{prop.soup}</Button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Delivery;
