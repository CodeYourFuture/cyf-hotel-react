import React, { useState } from "react";
import SearchBtn from "./components/SearchBtn.js";

const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = event => {
    console.log("inside hndleSearcInput");
    setSearchInput(event.target.value);
    console.log(searchInput);
  };

  const handleSubmit = event => {
    event.preventDefault();
    search(searchInput);
    console.log(searchInput);
    setSearchInput("");
  };

  return (
    // <div className="search">
    //   <div className="page-header">
    //     <h4 className="text-left">Search Bookings</h4>
    //   </div>
    //   <div className="row search-wrapper">
    //     <div className="col">
    //       <form className="form-group search-box">
    //         <label htmlFor="customerName">Customer name</label>
    //         <div className="search-row">
    //           <input
    //             type="text"
    //             id="customerName"
    //             className="form-control"
    //             placeholder="Customer name"
    //           />
    //           <SearchBtn />
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>

    <div className="search">
      <div className="page-header">
        <h4 className="text-left" onClick={() => alert("hi")}>
          Search Bookings
        </h4>
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
                onClick={() => alert("hi")}
                onChange={handleSearchInput}
              />
              <SearchBtn />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
