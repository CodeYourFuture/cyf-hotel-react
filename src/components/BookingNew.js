/* I had help with adding the input on new booking to the table */

import React, { useState } from "react";
import "./BookingNew.css";
import { Col, Row, Form, FormGroup } from "reactstrap";
import BookingNewTexts from "./BookingNewTexts";
import BookingNewEmail from "./BookingNewEmail";
import BookingNewSelect from "./BookingNewSelect";
import BookingNewDatePicker from "./BookingNewDatePicker";
import BookingNewRoomNumber from "./BookingNewRoomNumber";
import BookingNewSubmitButton from "./BookingNewSubmitButton";

function BookingNew(props) {
  const [formBookingDetails, setFormBookingDetails] = useState(
    props.sortedItems
  );

  const handleSubmit = event => {
    event.preventDefault();
    props.callback(formBookingDetails);
  };

  function updateFieldValue(field, value) {
    setFormBookingDetails({
      ...formBookingDetails,
      [field]: value
    });
  }

  return (
    <Form
      className="newbooking-section needs-validation"
      onSubmit={handleSubmit}
    >
      <Row form>
        <Col sm={12}>
          <FormGroup>
            <h3 className="text-center">New Booking</h3>
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <BookingNewSelect
              onUpdate={updateFieldValue}
              className="main-field"
              field={"Title"}
              identifier={"title"}
            />
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <BookingNewRoomNumber
              onUpdate={updateFieldValue}
              className="aside-field"
              field={"Room no."}
              identifier={"roomId"}
            />
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <BookingNewTexts
              onUpdate={updateFieldValue}
              className="main-field"
              field={"First name"}
              identifier={"firstName"}
            />
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <BookingNewDatePicker
              onUpdate={updateFieldValue}
              className="aside-field"
              label={"Check-in"}
              identifier={"checkInDate"}
            />
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <BookingNewTexts
              onUpdate={updateFieldValue}
              className="main-field"
              field={"Last name"}
              identifier={"surname"}
            />
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <BookingNewDatePicker
              onUpdate={updateFieldValue}
              className="aside-field"
              label={"Check-out"}
              identifier={"checkOutDate"}
            />
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <BookingNewEmail
              onUpdate={updateFieldValue}
              className="main-field"
              field={"Email"}
              identifier={"email"}
            />
          </FormGroup>
        </Col>
        <Col sm={6}>
          <BookingNewSubmitButton className="aside-field" />
        </Col>
      </Row>
    </Form>
  );
}

export default BookingNew;
