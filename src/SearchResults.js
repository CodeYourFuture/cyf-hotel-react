import React, { useState } from "react";
import moment from "moment";
import "./App.css";
import SearchResult from "./SearchResult";

//import SearchButton from "./SearchButton";

const SearchResults = props => {
  const highlight = {
    backgroundColor: "grey"
  };

  return (
    <div>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room Id</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>No. Of Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(oneObj => (
            <SearchResult result={oneObj} />
          ))}
        </tbody>
      </table>
      {/*{props.children}*/}
    </div>
  );
};
export default SearchResults;
