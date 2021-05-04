import React, { useState } from "react";
import SearchButton from "./SearchButton.js";
const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState(null);
  const [readyToGo, setreadyToGo] = useState(null);
  function handleSearchInput(event) {
    setSearchInput(event.target.value);
  }
  //ready to send
  function ready() {
    if (searchInput === null) {
      alert("enter the name in search field");
      // alert(readyToGo)
    } else {
      setreadyToGo("ready to go");
    }
  }
  //common between this doc and booking
  function send(event) {
    if (readyToGo === null) {
    } else {
      //alert(readyToGo)
      event.preventDefault();
      search(searchInput);
    }
  }

  return (
    <div className="search">
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={send}>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
                onChange={handleSearchInput}
              />

              <SearchButton ready={ready} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
