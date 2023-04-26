import React, { useState } from "react";

const NewBooking = ({ addBooking }) => {
  const [formValues, setFormValues] = useState({});

  const changeFormValue = (event) => {
    const inputValue = event.target.value;
    const inputName = event.target.getAttribute("name");
    const newFormData = { ...formValues, [inputName]: inputValue };
    setFormValues(newFormData);
  };
  function submitBooking(e) {
    const formDataKeys = Object.keys(formValues);

    if (formDataKeys.length === 7) {
      addBooking(formValues);
      setFormValues({});
    } else {
      alert("you have not added all form values");
    }
  }
  return (
    <div>
      <form class="form-width">
        <div class="mb-3">
          <label for="firstName" class="form-label">
            Enter your name:
          </label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            name="firstName"
            value={formValues["firstName"] || ""}
            onChange={changeFormValue}
          />
        </div>
        <div class="mb-3">
          <label for="surname" class="form-label">
            Enter your surname:
          </label>
          <input
            type="text"
            class="form-control"
            id="surname"
            name="surname"
            value={formValues["surname"] || ""}
            onChange={changeFormValue}
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">
            Enter your email:
          </label>
          <input
            type="text"
            class="form-control"
            id="email"
            name="email"
            value={formValues["email"] || ""}
            onChange={changeFormValue}
          />
        </div>
        <div class="mb-3">
          <label for="title" class="form-label">
            Enter your title:
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            name="title"
            value={formValues["title"] || ""}
            onChange={changeFormValue}
          />
        </div>
        <div class="mb-3">
          <label for="roomId" class="form-label">
            Your room id:
          </label>
          <input
            type="text"
            class="form-control"
            id="roomId"
            name="roomId"
            value={formValues["roomId"] || ""}
            onChange={changeFormValue}
          />
        </div>
        <div class="mb-3">
          <label for="checkInDate" class="form-label">
            Check in date:
          </label>
          <input
            type="text"
            class="form-control"
            id="checkInDate"
            name="checkInDate"
            value={formValues["checkInDate"] || ""}
            onChange={changeFormValue}
          />
        </div>
        <div class="mb-3">
          <label for="checkOutDate" class="form-label">
            Check out date:
          </label>
          <input
            type="text"
            class="form-control"
            id="checkOutDate"
            name="checkOutDate"
            value={formValues["checkOutDate"] || ""}
            onChange={changeFormValue}
          />
        </div>
        <button type="button" class="btn btn-primary" onClick={submitBooking}>
          Add new booking
        </button>
      </form>
    </div>
  );
};

export default NewBooking;
