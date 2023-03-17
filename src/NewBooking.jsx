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
      <form>
        <label>
          Enter your name:
          <input
            type="text"
            name="name"
            value={formValues["name"] || ""}
            onChange={changeFormValue}
          />
        </label>
        <label>
          Enter your surname:
          <input
            type="text"
            name="surname"
            value={formValues["surname"] || ""}
            onChange={changeFormValue}
          />
        </label>
        <label>
          Enter your email:
          <input
            type="text"
            name="email"
            value={formValues["email"] || ""}
            onChange={changeFormValue}
          />
        </label>
        <label>
          Enter your title:
          <input
            type="text"
            name="title"
            value={formValues["title"] || ""}
            onChange={changeFormValue}
          />
        </label>
        <label>
          your room id:
          <input
            type="text"
            name="roomId"
            value={formValues["roomId"] || ""}
            onChange={changeFormValue}
          />
        </label>
        <label>
          Check in date:
          <input
            type="text"
            name="check-in-date"
            value={formValues["check-in-date"] || ""}
            onChange={changeFormValue}
          />
        </label>
        <label>
          Check out date:
          <input
            type="text"
            name="check-out-date"
            value={formValues["check-out-date"] || ""}
            onChange={changeFormValue}
          />
        </label>
        <button type="button" onClick={submitBooking}>
          Add new booking
        </button>
      </form>
    </div>
  );
};

export default NewBooking;

