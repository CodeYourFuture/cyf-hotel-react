import React from "react";
import SingleSearchResult from "./SingleSearchResult";
const SearchResults = props => (
  <table className="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Title</th>
        <th scope="col">First Name</th>
        <th scope="col">Surname</th>
        <th scope="col">email</th>
        <th scope="col">room id</th>
        <th scope="col">check in date</th>
        <th scope="col">check out date</th>
        <th scope="col">nights booked</th>
      </tr>
    </thead>
    <tbody>
      {props.results.map(guestElem => (
        <SingleSearchResult guestElem={guestElem} />
      ))}
    </tbody>
  </table>
);

export default SearchResults;
