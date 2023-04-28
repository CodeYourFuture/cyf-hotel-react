import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import OrdData from "../data/orders.json";
import Form from "react-bootstrap/Form";

const HolderOrder = () => {
  const [holder, setHolder] = useState([]);
  const [holder1, setHolder1] = useState([]);
  const [holder2, setHolder2] = useState([]);

  const [hold, setHold] = useState(OrdData);
  const [holderCoffee, setHolderCoffee] = useState([]);
  const [holderCoffee1, setHolderCoffee1] = useState([]);
  const [holderCoffee2, setHolderCoffee2] = useState([]);

  const [holderSoup, setHolderSoup] = useState([]);
  const [holderSoup1, setHolderSoup1] = useState([]);
  const [holderSoup2, setHolderSoup2] = useState([]);

  function buyOrder(buyPizza) {
    console.log(buyPizza);
    if (buyPizza.includes("pizza vegan")) {
      setHolder(buyPizza);
    } else if (buyPizza.includes("pizza meat")) {
      setHolder1(buyPizza);
    } else if (buyPizza.includes("pizza chicken")) {
      setHolder2(buyPizza);
    } else {
      return false;
    }
  }
  function buyOrderCoffee(buyCoffee) {
    if (buyCoffee.includes("black coffee")) {
      setHolderCoffee(buyCoffee);
    } else if (buyCoffee.includes("espresso coffee")) {
      setHolderCoffee1(buyCoffee);
    } else if (buyCoffee.includes("latte coffee")) {
      setHolderCoffee2(buyCoffee);
    } else {
      return null;
    }
  }
  function buyOrderSoup(buySoup) {
    if (buySoup.includes("soup fish")) {
      setHolderSoup(buySoup);
    } else if (buySoup.includes("soup beef")) {
      setHolderSoup1(buySoup);
    } else if (buySoup.includes("soup mushroom")) {
      setHolderSoup2(buySoup);
    } else {
      return null;
    }
  }
  function handleOrder() {
    alert("you will receive your Order as soon");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setHolder("");
    setHolderCoffee("");
    setHolderSoup("");
  }
  return (
    <div className="holder-order">
      {hold.map((item, i) => {
        return (
          <Form key={i} className="form-order">
            <span className="span-order">
              <Form.Check
                type="checkbox"
                value={item.pizza}
                onChange={() => buyOrder(item.pizza)}
              />
              <label>{item.pizza}</label>
            </span>
            <span className="span-order">
              <Form.Check
                type="checkbox"
                value={holderCoffee}
                onChange={() => buyOrderCoffee(item.coffee)}
              />
              <label>{item.coffee}</label>
            </span>
            <span className="span-order">
              <Form.Check
                type="checkbox"
                value={holderSoup}
                onChange={() => buyOrderSoup(item.soup)}
              />
              <label>{item.soup}</label>
            </span>
          </Form>
        );
      })}
      <form onSubmit={handleSubmit} className="allHolders">
        <div className="holder1">
          <span>{holder}</span>
          <span>{holder1}</span>
          <span>{holder2}</span>
        </div>
        <div className="holder2">
          <span>{holderCoffee}</span>
          <span>{holderCoffee1}</span>
          <span>{holderCoffee2}</span>
        </div>
        <div className="holder3">
          <span>{holderSoup}</span>
          <span>{holderSoup1}</span>
          <span>{holderSoup2}</span>
        </div>
        <Button onClick={handleOrder}>submit</Button>
      </form>
    </div>
  );
};

export default HolderOrder;
