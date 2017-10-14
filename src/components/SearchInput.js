import React from "react";

const SearchInput = props => (
  <div>
    <td key="searchIinput">
      <input
        id="searchId"
        type="text"
        className="form-control"
        placeholder={"Coustomer id"}
        name="searchId"
      />
    </td>
    <td key="search-button">
      <button className="btn btn-primary fn-submit-name" onClick = {props.isClicked} >{"Search id"}</button>
    </td>
  </div>
)
export default SearchInput;
