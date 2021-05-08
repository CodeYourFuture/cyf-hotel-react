import React from "react";
import { Button } from "reactstrap";

import "./BookingNewSubmitButton.css";

const BookingNewSubmitButton = () => {
  return (
    <div className="form-group">
      <Button color="warning" className="submit-button" block>
        Submit
      </Button>
    </div>
  );
};

export default BookingNewSubmitButton;
