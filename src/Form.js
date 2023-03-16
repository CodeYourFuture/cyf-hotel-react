import React from "react";
//first name, surname, email, title, room id, check in date, check out date

const Form = () => {
  return (
    <form>
      <label for="firstName">FirstName</label>
      <input
        type="text"
        id="firstName"
        className="form-input"
        placeholder="Customer name"
        // value={FirstName}
      />
    </form>
  );
};

export default Form;
