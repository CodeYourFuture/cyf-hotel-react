import React from "react";

//#### 1. Extract the search button in its own component

//**Instructions:** Extract the search `<button>` from the `src/Search.js` file to be its own separate component. You can name it `SearchButton`. Import and use this new component in `src/Search.js`.

//**Test:** The search button should still render on the page.

const SearchButton = () => {
  return (
    <div>
      <button className="btn btn-primary">Search</button>
    </div>
  );
};

export default SearchButton;
