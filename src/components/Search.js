import React, {Component } from 'react';
import SearchInput from "./SearchInput.js";
import Results from "./Results.js";
import SearchButton from "./SearchButton.js";
import SearchInputHeader from "./SearchInputHeader";

const Search = props => (
  <div className="search">
    <div className="page-header">
      <h4 className="text-left">Search Bookings</h4>
    </div>
    <div className="row">
      <div className="col">
        <table className="table search-table">
          <thead>
            <tr>
              <SearchInputHeader header="Customer ID" />
              <th />
              <SearchInputHeader header="Customer name"/>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
             <SearchInput name="seachById" placeholder="Seach by id"/>
             <td>
              <SearchButton />
             </td>
             <SearchInput name="seachByName" placeholder="Search by name"/>
             <td>
              <SearchButton />
            </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
export default Search;
