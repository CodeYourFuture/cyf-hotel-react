import React from "react";
import SearchButton from "./SearchButton";


// #### 17. Storing the search input in a state

// **Instructions:** In the following, we will implement the functionality to search for a customer name given the text typed into the customer name field. In the `src/Search.js` file, declare a new state variable named `searchInput` with the corresponding setter function `setSearchInput` (hint: use the React function `useState`). The initial value of the `searchInput` variable can be an empty string. Add a `value` property to the `<input>` tag that is set to the new `searchInput` state variable. Create a new function `handleSearchInput` taking an `event` parameter. This function should use the `setSearchInput` function to update the state variable `searchInput` with what the user typed in the input field. Finally, add a `onChange` prop to the `<input>` tag that is set to the function `handleSearchInput`. Use `console.log()` to output the value received in the `handleSearchInput` function.

// **Hint:** Use `event.target.value` to get the input value.

// **Test:** In the developer console, check that everything you type in the search input is printed successively for each new character you enter.



const Search = () => {
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box">
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
              />
             <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
