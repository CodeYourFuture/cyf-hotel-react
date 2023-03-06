import React from "react";
import SearchResult from "./SearchResult";
import data from "./data/fakeBookings.json";

const SearchResults = props => {
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
          <th scope="col">check out date</th>
          <th scope="col">nights stayed</th>
        </tr>
      </thead>
      <tbody>
        {data.map(pesron => (
          <SearchResult result={pesron} />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
