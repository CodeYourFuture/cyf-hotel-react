import React, { useState } from "react";

const FormInputField = ({ type, name }) => {
  const [value, setValue] = useState("");
  return (
    <input
      type={type}
      value={value}
      name={name}
      onChange={e => {
        setValue(e.target.value);
      }}
    />
  );
};

export default FormInputField;
