import React, { useState } from "react";
//first name, surname, email, title, room id, check in date, check out date

const Form = ({ addCustomer, data }) => {
  const [formInput, setFormInput] = useState();

  const submitHandler = event => {
    setFormInput({
      id: "",
      firstName: "",
      surname: "",
      email: "",
      title: "",
      roomId: 10,
      checkInDate: "",
      checkOutDate: ""
    });
    event.preventDefault();
    addCustomer(formInput);
  };

  return (
    <form className="form-container" onSubmit={submitHandler}>
      <label htmlFor="firstName">FirstName</label>
      <input
        type="text"
        id="firstName"
        className="form-input"
        placeholder="First Name"
        onChange={event =>
          setFormInput({ ...formInput, firstName: event.target.value })
        }
      />
      <label htmlFor="surename">Surename</label>
      <input
        type="text"
        id="sureName"
        className="form-input"
        placeholder="Surename"
        onChange={event =>
          setFormInput({ ...formInput, surname: event.target.value })
        }
      />
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        className="form-input"
        placeholder="Title"
        onChange={event =>
          setFormInput({ ...formInput, title: event.target.value })
        }
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        className="form-input"
        placeholder="Email"
        onChange={event =>
          setFormInput({ ...formInput, email: event.target.value })
        }
      />
      <label htmlFor="checkInDate">checkInDate</label>
      <input
        type="date"
        id="checkInDate"
        className="form-input"
        onChange={event =>
          setFormInput({ ...formInput, checkInDate: event.target.value })
        }
      />
      <label htmlFor="checkOutDate">checkOutDate</label>
      <input
        type="date"
        id="checkOutDate"
        className="form-input"
        onChange={event =>
          setFormInput({ ...formInput, checkOutDate: event.target.value })
        }
      />
      <button className="form-button">Submit</button>
    </form>
  );
};

export default Form;
