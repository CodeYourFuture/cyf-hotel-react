import React from "react";
import Buttton from "./Button";
const SearchControls = ({
  htmlFor,
  searchBy,
  id,
  placeholder,
  btn_label,
  searchHandler,
  enteredValue
}) => (
  <div className="col">
    <form onSubmit={searchHandler}>
      <div className="form-group search-box">
        <label htmlFor={htmlFor}>{searchBy}</label>
        <div className="search-row">
          <input
            type="text"
            id={id}
            className="form-contro"
            placeholder={placeholder}
            name={enteredValue}
          />
          <Buttton btn_label={btn_label} />
        </div>
      </div>
    </form>
  </div>
);
export default SearchControls;
