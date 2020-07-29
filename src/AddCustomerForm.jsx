import React, { useState } from "react";

const AddCustomerForm = props => {
  const initUser = {
    id: null,
    title: "",
    firstName: "",
    surname: "",
    email: "",
    roomId: " ",
    checkInDate: "",
    checkOutDate: ""
  };

  const [customer, setCustomer] = useState(initUser);

  const handleChange = event => {
    const updateCustomer = {
      ...customer,
      [event.target.name]: event.target.value
    };
    setCustomer(updateCustomer);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(customer.email);
    if (
      customer.email &&
      customer.firstName &&
      customer.surname &&
      customer.title &&
      customer.roomId &&
      customer.checkInDate &&
      customer.checkOutDate
    ) {
      handleChange(event, props.addCustomer(customer));
    }
  };

  return (
    <form>
      <label>Title</label>
      <input
        className="u-full-width"
        type="text"
        value={customer.title}
        name="title"
        onChange={handleChange}
      />
      <label>First-Name</label>
      <input
        className="u-full-width"
        type="text"
        value={customer.firstName}
        name="firstName"
        onChange={handleChange}
      />
      <label>surname</label>
      <input
        className="u-full-width"
        type="text"
        value={customer.surname}
        name="surname"
        onChange={handleChange}
      />
      <label>email</label>
      <input
        className="u-full-width"
        type="text"
        value={customer.email}
        name="email"
        onChange={handleChange}
      />
      <label>Room-id</label>
      <input
        className="u-full-width"
        type="number"
        value={customer.roomId}
        name="roomId"
        onChange={handleChange}
      />
      <label>CheckIn</label>
      <input
        className="u-full-width"
        type="date"
        value={customer.checkInDate}
        name="checkInDate"
        onChange={handleChange}
      />
      <label>CheckOut</label>
      <input
        className="u-full-width"
        type="date"
        value={customer.checkOutDate}
        name="checkOutDate"
        onChange={handleChange}
      />
      <button className="button-primary" type="submit" onClick={handleSubmit}>
        Add user
      </button>
    </form>
  );
};

export default AddCustomerForm;
