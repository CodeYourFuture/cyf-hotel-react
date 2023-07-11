import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import OrdData from "../data/orders.json";
import Form from "react-bootstrap/Form";
import { AiFillDelete } from "react-icons/ai";
//import DeleteOrder from "./DeleteOrder.js";

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
  const [show, setShow] = useState(false);
  const [showDeleteVegan, setShowDeleteVegan] = useState(false);
  const [showDeleteMeat, setShowDeleteMeat] = useState(false);
  const [showDeleteChicken, setShowDeleteChicken] = useState(false);

  function buyOrder(buyPizza) {
    if (buyPizza.includes("pizza vegan")) {
      setHolder(buyPizza);
    } else if (buyPizza.includes("pizza meat")) {
      setHolder1(buyPizza);
    } else if (buyPizza.includes("pizza chicken")) {
      setHolder2(buyPizza);
    } else {
      setHolder("");
      // return false;
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
  function handleDeleteVegan(holder) {
    let pizzaDelete = holder !== "" ? null : holder;
    setHolder(pizzaDelete);
    setShowDeleteVegan(false);
  }
  function handleDeleteMeat(holder1) {
    let pizzaDelete = holder1 !== "" ? null : holder1;
    setHolder1(pizzaDelete);
    setShowDeleteMeat(false);
  }
  function handleDeleteChicken(holder2) {
    let pizzaDelete = holder2 !== "" ? null : holder2;
    setHolder2(pizzaDelete);
    setShowDeleteChicken(false);
  }
  function handleDeleteBlack(holderCoffee) {
    let deleteCoffee = holderCoffee !== "" ? null : holderCoffee;
    setHolderCoffee(deleteCoffee);
    setShow(false);
  }
  function handleDeleteEspresso(holderCoffee1) {
    let deleteCoffee = holderCoffee1 !== "" ? null : holderCoffee1;
    setHolderCoffee1(deleteCoffee);
    setShow(false);
  }
  function handleDeleteLatte(holderCoffee2) {
    let deleteCoffee = holderCoffee2 !== "" ? null : holderCoffee2;
    setHolderCoffee2(deleteCoffee);
    setShow(false);
  }
  function handleDeleteFish(holderSoup) {
    let soupDelete = holderSoup !== "" ? null : holderSoup;
    setHolderSoup(soupDelete);
    setShow(false);
  }
  function handleDeleteBeef(holderSoup1) {
    let soupDelete = holderSoup1 !== "" ? null : holderSoup1;
    setHolderSoup1(soupDelete);
    handleShow(!show);
  }
  function handleDeleteMushroom(holderSoup2) {
    let soupDelete = holderSoup2 !== "" ? null : holderSoup2;
    setHolderSoup2(soupDelete);
    setShow(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("you will receive your Order as soon");
    // setHolder("");
    // setHolder1("");
    // setHolder2("");
    // setHolderCoffee("");
    // setHolderSoup("");
  }
  function handleShow() {
    setShow(true);
  }
  function deleteItem() {
    if (holder) {
      setShowDeleteVegan(true);
    } else if (holder1) {
      setShowDeleteMeat(true);
    } else if (holder2) {
      setShowDeleteChicken(true);
    } else {
      setShowDeleteVegan(false);
      setShowDeleteMeat(false);
      setShowDeleteChicken(false);
    }
  }
  return (
    <div className="holder-order">
      <AiFillDelete />

      {hold.map((item, i) => {
        return (
          <Form key={i} className="form-order">
            <span className="span-order">
              <Form.Check
                type="checkbox"
                value={holder}
                onChange={() => buyOrder(item.pizza)}
                onClick={() => {
                  deleteItem();
                  handleShow();
                }}
              />
              <label>{item.pizza} </label>
            </span>
            <span className="span-order">
              <Form.Check
                type="checkbox"
                value={holderCoffee}
                onChange={() => buyOrderCoffee(item.coffee)}
                onClick={() => setShow(true)}
              />
              <label>{item.coffee}</label>
            </span>
            <span className="span-order">
              <Form.Check
                type="checkbox"
                value={holderSoup}
                onChange={() => buyOrderSoup(item.soup)}
                onClick={() => setShow(true)}
              />
              <label>{item.soup}</label>
            </span>
          </Form>
        );
      })}
      <form onSubmit={handleSubmit} className="allHolders">
        <div className="holder1">
          {showDeleteVegan ? (
            <span>
              <Button>
                <AiFillDelete onClick={() => handleDeleteVegan(holder)} />
              </Button>
              {holder}
            </span>
          ) : null}
          {showDeleteMeat ? (
            <span>
              <Button>
                <AiFillDelete onClick={() => handleDeleteMeat(holder1)} />
              </Button>
              {holder1}
            </span>
          ) : null}
          {showDeleteChicken ? (
            <span>
              <Button>
                <AiFillDelete onClick={() => handleDeleteChicken(holder2)} />
              </Button>
              {holder2}
            </span>
          ) : null}
          {/* </div>
        <div className="holder2"> */}

          <span onClick={() => handleDeleteBlack(holderCoffee)}>
            {holderCoffee}
          </span>
          <span onClick={() => handleDeleteEspresso(holderCoffee1)}>
            {holderCoffee1}
          </span>
          <span onClick={() => handleDeleteLatte(holderCoffee2)}>
            {holderCoffee2}
          </span>
          {/* 
        </div>
        <div className="holder3"> */}

          <span onClick={() => handleDeleteFish(holderSoup)}>
            {" "}
            {holderSoup}{" "}
          </span>
          <span onClick={() => handleDeleteBeef(holderSoup1)}>
            {holderSoup1}
          </span>
          <span onClick={() => handleDeleteMushroom(holderSoup2)}>
            {holderSoup2}
          </span>
        </div>
        {show ? <Button>submit</Button> : null}
      </form>
    </div>
  );
};

export default HolderOrder;
