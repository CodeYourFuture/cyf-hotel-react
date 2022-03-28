import React from "react";
import TableHeading from "./TableHeading";
import TableBody from "./TableBody";

const SearchResults = props => {
  return (
    <div className="table-responsive-md">
      <table className="table">
        <TableHeading />
        <tbody>
          {props.results.map((person, index) => {
            return <TableBody key={index} data={person} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
