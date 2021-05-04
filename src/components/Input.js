import React from "react";
import "./Input.css";

const Input = ({ label, type, name, value, onChange }) => (
  <label className="form-field">
    <span className="field-label">{label}</span>
    <input type={type} name={name} value={value} onChange={onChange} required />
  </label>
);

export default Input;
