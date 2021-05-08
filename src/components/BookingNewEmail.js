import React, { useState } from "react";
import { Label, Input } from "reactstrap";
import "./BookingNewTexts.css";

const BookingNewEmail = props => {
  const [fieldValue, setFieldValue] = useState("");

  function updateFieldValue(event) {
    setFieldValue(event.target.value);
    props.onUpdate(props.identifier, event.target.value);
  }

  return (
    <div className="input-text-container">
      <Label for={props.field} hidden>
        {props.field}
      </Label>
      <Input
        type="email"
        className="input-text"
        placeholder={props.field}
        value={fieldValue}
        onChange={updateFieldValue}
        required
      />
    </div>
  );
};

export default BookingNewEmail;
