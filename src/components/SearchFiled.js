import React from "react";
export default ({ name, action }) => (
  <input
    id={`SearchFiled ${name}`}
    type="text"
    className="form-control"
    placeholder={name}
    name={name}
    onChange={action}
    
  />
);
