import React, { useState } from "react";
import moment from "moment";
import SearchResultItem from "./SearchResultItem";

const SearchResults = ({ searchResults }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Total Nights</th>
        </tr>
      </thead>
      <tbody>
        {searchResults.map(props => (
          <SearchResultItem {...props} />
        ))}
      </tbody>
    </table>
  );
};
export default SearchResults;
