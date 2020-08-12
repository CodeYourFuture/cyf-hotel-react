import React from "react";
import "./Form.css";
const Form = ({ label, type, name, value, onChange }) => (
  <label className="form-field">
    <span className="field-label">{label}</span>
    <input type={type} name={name} value={value} onChange={onChange} required />
  </label>
);

export default Form;
