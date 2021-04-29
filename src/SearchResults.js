import React from "react";
import GuestsDetails from "./GuestsDetails";

const SearchResults = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          {props.tableHeaders.map((header, index) => (
            <th key={index} className="table-header" scope="col">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <GuestsDetails guests={props.results} />
    </table>
  );
};

export default SearchResults;
