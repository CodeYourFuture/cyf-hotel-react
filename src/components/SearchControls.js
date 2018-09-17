import React from 'react'
import Buttton from "./Button";
const SearchControls = ({
  htmlFor,
  searchBy,
  id,
  placeholder,
  btn_label,
  searchHandler
}) => (
  <div className="col">
    <div className="form-group search-box">
      <label htmlFor={htmlFor }>{searchBy}</label>
      <div className="search-row">
        <input
          type="text"
          id={id}
          className="form-control"
          placeholder={placeholder }
        />
        <Buttton btn_label={btn_label } searchHandler={searchHandler} />
      </div>
    </div>
  </div>
);
export default SearchControls