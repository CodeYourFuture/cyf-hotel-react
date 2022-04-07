import React from "react";

const SearchInput = props => {
  return (
    <input
      value={props.value}
      onChange={props.onChange}
      type="text"
      id="customerName"
      className="form-control"
      placeholder="Customer name"
    />
  );
};

export default SearchInput;
