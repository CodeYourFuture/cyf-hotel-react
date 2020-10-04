import React, { useState } from "react";

const SearchInput = props => {
  const [inputValue, setInputValue] = useState("");

  const changeEvent = event => {
    setInputValue(event.target.value);
  };
  const searchClick = event => {
    event.preventDefault();
    props.searchForName(inputValue);
  };
  return (
    <form
      className="form-group search-box lg-col-12 col-12"
      onSubmit={searchClick}
    >
      <label htmlFor="customerName">Customer name</label>
      <div className=" search-input">
        <input
          type="text"
          id="customerName"
          className="form-control"
          placeholder="Customer name"
          onChange={changeEvent}
          value={inputValue}
        />
        <button className="btn btn-primary">Search</button>
      </div>
    </form>
  );
};

export default SearchInput;
