import React, { useState } from "react";
import AddBooking from "./AddCustomer";

const AddCustomerButton = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="container">
      <button className="btn btn-primary" onClick={() => setClicked(!clicked)}>
        Add New Customer
      </button>

      {clicked ? <AddBooking /> : null}
    </div>
  );
};

export default AddCustomerButton;
