import React from "react";
import SearchResultsBody from "./SearchResultsBody";

const itemsTitle = [
  <thead key={11} className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Room Number</th>
      <th scope="col">Check in</th>
      <th scope="col">Check Out</th>
      <th scope="col">Nights</th>
    </tr>
  </thead>,
];

const SearchResults = () => {
  return (
    <div className="container">
      <table className="table">
        {itemsTitle}
        <SearchResultsBody />
      </table>
    </div>
  );
};

export default SearchResults;
