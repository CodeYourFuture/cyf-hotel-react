import React, { useState, useEffect } from "react";
//first name, surname, email, title, room id, check in date, check out date

const Form = ({ addCustomer, data }) => {
  const [formInput, setFormInput] = useState();

  useEffect(() => {
    setFormInput({
      id: data.length,
      firstName: "",
      surename: "",
      email: "",
      title: "",
      roomId: 10,
      checkIndate: Date.now(),
      checkOutDate: Date.now
    });
  }, []);
  console.log(data.length);
  console.log(formInput);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        addCustomer(formInput);
      }}
    >
      <label for="firstName">FirstName</label>
      <input
        type="text"
        id="firstName"
        className="form-input"
        placeholder="First Name"
        onChange={event =>
          setFormInput({ ...formInput, firstName: event.target.value })
        }
      />
      <label for="surename">Surename</label>
      <input
        type="text"
        id="sureName"
        className="form-input"
        placeholder="Surename"
        onChange={event =>
          setFormInput({ ...formInput, surename: event.target.value })
        }
      />
      <label for="email">Email</label>
      <input
        type="text"
        id="email"
        className="form-input"
        placeholder="Email"
        onChange={event =>
          setFormInput({ ...formInput, email: event.target.value })
        }
      />
      <label for="title">Title</label>
      <input
        type="text"
        id="title"
        className="form-input"
        placeholder="Title"
        onChange={event =>
          setFormInput({ ...formInput, title: event.target.value })
        }
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
