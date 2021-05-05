import React from "react";

const SearchInput = props => {
  return (
    <input
      type="text"
      id="customerName"
      value={props.value}
      onChange={props.onChange}
      className="form-control"
      placeholder="Customer name"
    />
  );
};

export default SearchInput;
