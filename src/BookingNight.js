import Form from "react-bootstrap/Form";
//import Modules from "./component/Modules";
import React from "react";
import { Button } from "react-bootstrap";

const BookingNight = () => {
  return (
    <div className="form-submit">
      <Form className="form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className="place-h"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Control
            className="place-h"
            type="number"
            placeholder="phone Number"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Control className="place-h" type="text" placeholder="City" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Control
            className="place-h"
            type="number"
            placeholder="Number"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        {/* <Modules /> */}
      </Form>
      <Button className="button">close</Button>
    </div>
  );
};

export default BookingNight;
