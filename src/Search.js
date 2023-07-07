import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.search(searchInput);
  };
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSubmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
                onChange={handleSearchInput}
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

// It is a React component called Search. It imports the React library and the SearchButton component from a file named
// "SearchButton.js". It also imports the useState hook from React. The Search component is a functional component defined
// as an arrow function that takes in props as a parameter. It returns JSX representing the structure and content of
// the component's output. Within the Search component, there is a call to the useState hook, which initializes a state
// variable called searchInput and a corresponding function to update it called setSearchInput. The initial value of
// searchInput is an empty string. The handleSearchInput function is defined to handle changes in the search input field.
// It is called whenever the value of the input field changes, and it updates the searchInput state variable with the new
// value. The handleSubmit function is defined to handle form submission. It is called when the form is submitted and
// prevents the default form submission behavior. It then calls the search function passed as a prop, passing the searchInput
// value as an argument. The JSX returned by the Search component represents a search box UI. It consists of a <div>
// element with the className "search". Inside the <div>, there is a <div> element with the className "page-header" and
// an <h4> element with the text "Search Bookings". Below that, there is a <div> element with the className
// "row search-wrapper" containing a <div> element with the className "col". Inside the inner <div> with the className
// "col", there is a <form> element with the className "form-group search-box". The form has a label with the text
// "Customer name" and an input field of type "text". The value of the input field is set to the searchInput state variable,
// and the handleSearchInput function is called whenever the value of the input field changes. The <form> element also
// has an onSubmit event handler set to the handleSubmit function, which will be called when the form is submitted.
// Additionally, there is a <SearchButton /> component rendered inside the form, which is responsible for rendering a
// search button. The Search component is exported as the default export, allowing it to be imported and used in other
// files. Other files can import the Search component using import Search from "./Search.js", assuming the file is in
// the same directory.