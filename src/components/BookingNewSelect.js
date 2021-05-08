import React, { useState } from "react";
import "./BookingNewSelect.css";
import { Label, Input } from "reactstrap";

function BookingNewSelect(props) {
  const [fieldValue, setFieldValue] = useState("");

  function updateFieldValue(event) {
    setFieldValue(event.target.value);
    props.onUpdate(props.identifier, event.target.value);
  }
  return (
    <div className="select-container">
      <Label for="exampleSelect" hidden>
        Select
      </Label>
      <Input
        type="select"
        name="select"
        id="exampleSelect"
        value={fieldValue}
        onChange={updateFieldValue}
        required
      >
        <option>Title</option>
        <option>Child</option>
        <option>Dame</option>
        <option>Doctor</option>
        <option>Madam</option>
        <option>Mr</option>
        <option>Prince</option>
        <option>Princess</option>
      </Input>
    </div>
  );
}

export default BookingNewSelect;
