import React from "react";
import SearchButton from "./SearchButton";
import { useState } from "react";
// import Footer from "./Footer";


const Search = () => {
  const [searchInput, setSearchInput] = useState(''),
    captureInput = (e) => {
      console.log(e.target.value)
      setSearchInput(e.target.value)
      // console.log(searchInput)
      // console.log(searchInput, 'Maroga Got this')


    }

  const submit = (e) => {
    e.preventDefault();

    const name = searchInput;
    console.log(name)
  }
  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={submit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                onChange={captureInput}
              />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
      {/*<Footer />*/}
    </div>
  );
};

export default Search;
