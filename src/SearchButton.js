import React from "react"; // imported react library

/*extracted the search button from the search on a new component called search Button */
const SearchButton = () => {
  return (
    // returned the button with JSX tags in the  search button component
    <div>
      <button className="btn btn-primary">Search</button>
    </div>
  );
};

export default SearchButton;
