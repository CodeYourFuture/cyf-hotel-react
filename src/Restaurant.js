import React, { useState } from "react";
import Order from "./Order";
import { Card, Collapse } from "react-bootstrap";
const Restaurant = () => {
  const [cardOpen, setCardOpen] = useState(false);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header
        className="center"
        aria-controls="example-collapse-text"
        aria-expanded={cardOpen}
        onClick={() => setCardOpen(!cardOpen)}
      >
        <h3>Restaurant Orders</h3>
      </Card.Header>
      <Collapse in={cardOpen}>
        <Card.Body>
          <ul className="decoration" className="center">
            <li>
              {" "}
              <Order orderType="Pizzas" />
            </li>
            <li>
              <Order orderType="Salads" />
            </li>
            <li>
              <Order orderType="Chocolate cake" />
            </li>
          </ul>
        </Card.Body>
      </Collapse>
    </Card>
  );
};

export default Restaurant;
