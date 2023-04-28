import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";

const BookingNight = () => {
  return (
    <div className="form-submit">
      <Form className="form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className="place-h"
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookingNight;
