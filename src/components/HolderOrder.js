import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import OrdData from "../data/orders.json";
import Form from "react-bootstrap/Form";
import { AiFillDelete } from "react-icons/ai";

const HolderOrder = () => {
  const [holder, setHolder] = useState([]);
  const [holderCoffee, setHolderCoffee] = useState([]);
  const [holderSoup, setHolderSoup] = useState([]);
  const [show, setShow] = useState(false);

  function buyOrder(buyPizza) {
    setHolder(prevHolder => [...prevHolder, buyPizza]);
  }
  function buyOrderCoffee(buyCoffee) {
    setHolderCoffee(prevHolder => [...prevHolder, buyCoffee]);
  }
  function buyOrderSoup(buySoup) {
    setHolderSoup(prevHolder => [...prevHolder, buySoup]);
  }
  function handleDeleteOrder(item, order) {
    switch (order) {
      case "pizza":
        setHolder(prevHolder =>
          prevHolder.filter(category => category !== item)
        );
        setShow(true);
        break;
      case "coffee":
        setHolderCoffee(prevHolderCoffee =>
          prevHolderCoffee.filter(category => category !== item)
        );
        setShow(true);

        break;
      case "soup":
        setHolderSoup(prevHolderSoup =>
          prevHolderSoup.filter(category => category !== item)
        );
        setShow(true);

      default:
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShow(false);
    alert("you will receive your Order as soon");
    setHolder([]);
    setHolderCoffee([]);
    setHolderSoup([]);
  }

  function handleShow() {
    setShow(true);
  }

  return (
    <div className="holder-order">
      {OrdData.map((item, i) => {
        return (
          <Form key={i} className="form-order">
            <span className="span-order">
              <Form.Check
                type="checkbox"
                checked={holder.includes(item.pizza)}
                onChange={() => buyOrder(item.pizza)}
                onClick={() => handleShow(item.pizza)}
              />
              <label>{item.pizza} </label>
            </span>
            <span className="span-order">
              <Form.Check
                type="checkbox"
                checked={holderCoffee.includes(item.coffee)}
                onChange={() => buyOrderCoffee(item.coffee)}
                onClick={handleShow}
              />
              <label>{item.coffee}</label>
            </span>
            <span className="span-order">
              <Form.Check
                type="checkbox"
                checked={holderSoup.includes(item.soup)}
                onChange={() => buyOrderSoup(item.soup)}
                onClick={handleShow}
              />
              <label>{item.soup}</label>
            </span>
          </Form>
        );
      })}
      <form onSubmit={handleSubmit} className="allHolders">
        {holder.map((item, i) => (
          <span key={i}>
            <Button className="btn btn-danger">
              <AiFillDelete onClick={() => handleDeleteOrder(item, "pizza")} />
            </Button>
            {item}
          </span>
        ))}

        {holderCoffee.map((item, i) => (
          <span key={i}>
            <Button className="btn btn-danger">
              <AiFillDelete onClick={() => handleDeleteOrder(item, "coffee")} />
            </Button>
            {item}
          </span>
        ))}
        {holderSoup.map((item, i) => (
          <span key={i}>
            <Button className="btn btn-danger">
              <AiFillDelete onClick={() => handleDeleteOrder(item, "soup")} />
            </Button>
            {item}
          </span>
        ))}

        {show ? (
          <Button className="btn-show" type="submit">
            Order Now
          </Button>
        ) : (
          !show
        )}
      </form>
    </div>
  );
};

export default HolderOrder;
