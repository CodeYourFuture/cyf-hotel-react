import React, { useState } from "react";
import { Label, Input } from "reactstrap";
import "./BookingNewRoomNumber.css";

function BookingNewRoomNumber(props) {
  const [roomNumber, setRoomNumber] = useState(0);
  function updateFieldValue(event) {
    setRoomNumber(event.target.value);
    props.onUpdate(props.identifier, event.target.value);
  }
  return (
    <div className="input-number-container">
      <Label for="exampleNumber" hidden>
        Room no.
      </Label>
      <Input
        type="number"
        min="0"
        name="number"
        id="exampleNumber"
        className="input-number"
        placeholder={props.field}
        value={roomNumber}
        onChange={updateFieldValue}
        onFocus={e => (e.target.value = "")}
        required
      />
    </div>
  );
}

export default BookingNewRoomNumber;
