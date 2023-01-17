import React from "react";
import Search from "./Search";
function submitHandler(event, { searchInput }) {
  event.preventDefault();
  return searchInput;
}
const SearchButton = () => {
  return (
    <button className="btn btn-primary" onClick={submitHandler}>
      Search
    </button>
  );
};
export default SearchButton;
