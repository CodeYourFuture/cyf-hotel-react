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
          <select
            class="form-select"
            id="title"
            name="title"
            value={formValues["title"] || ""}
            onChange={changeFormValue}
          >
            <option value="">Select your title</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Ms.">Ms.</option>
            <option value="Miss">Miss</option>
            <option value="Mr.">Mr.</option>
            <option value="Dr.">Dr.</option>
            <option value="Prof. ">Prof. </option>
          </select>
        </div>
        <div class="mb-3">
          <label for="roomId" class="form-label">
            Your room id:
          </label>
          <select
            class="form-select"
            id="roomId"
            name="roomId"
            value={formValues["roomId"] || ""}
            onChange={changeFormValue}
          >
            <option value="">Select a room ID</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="checkInDate" class="form-label">
            Check in date:
          </label>
          <input
            type="date"
            class="form-control"
            id="checkInDate"
            name="checkInDate"
            value={formValues["checkInDate"] || ""}
            onChange={changeFormValue}
            min={new Date().toISOString().split("T")[0]}
          />
        </div>
        <div class="mb-3">
          <label for="checkOutDate" class="form-label">
            Check out date:
          </label>
          <input
            type="date"
            class="form-control"
            id="checkOutDate"
            name="checkOutDate"
            value={formValues["checkOutDate"] || ""}
            onChange={changeFormValue}
            min={
              formValues["checkInDate"] ||
              new Date().toISOString().split("T")[0]
            }
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
