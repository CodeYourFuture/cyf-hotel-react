import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Label } from "reactstrap";

import "react-datepicker/dist/react-datepicker.css";
import "./BookingNewDatePicker.css";

const BookingNewDatePicker = props => {
  const [date, setDate] = useState(null);

  function updateFieldValue(date) {
    setDate(date);
    props.onUpdate(props.identifier, date.toISOString().slice(0, 10));
  }

  return (
    <div>
      <Label for="exampleDate" hidden>
        Date
      </Label>
      <DatePicker
        placeholderText={props.label}
        dateFormat="yyyy-MM-dd"
        className="date-picker-wrapper"
        selected={date}
        onChange={date => updateFieldValue(date)}
        required
      />
    </div>
  );
};

export default BookingNewDatePicker;
