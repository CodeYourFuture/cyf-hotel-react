import React, {useState} from "react";

const NewBooking = ({addBooking}) => {

const [formValues, setFormValues] = useState({});

const changeFormValue = (event) => {
  const inputValue = event.target.value;
      const inputName = event.target.getAttribute("name");
      const newFormData = {...formValues, [inputName]: inputValue}
      setFormValues(newFormData)
};
function submitBooking(e){
    const formDataKeys = Object.keys(formValues)
    if(formDataKeys.length === 7){
      addBooking(formValues)
      setFormValues({})
    } else {
      alert("you have not added all form values")
    }
  }
  return (
    <div>
      <form class="form-width">
        <div class="mb-3">
          <label for="name" class="form-label">
            Enter your name:
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            name="name"
            value={formValues["name"] || ""}
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
          <label for="check-in-date" class="form-label">
            Check in date:
          </label>
          <input
            type="text"
            class="form-control"
            id="check-in-date"
            name="check-in-date"
            value={formValues["check-in-date"] || ""}
            onChange={changeFormValue}
          />
        </div>
        <div class="mb-3">
          <label for="check-out-date" class="form-label">
            Check out date:
          </label>
          <input
            type="text"
            class="form-control"
            id="check-out-date"
            name="check-out-date"
            value={formValues["check-out-date"] || ""}
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

