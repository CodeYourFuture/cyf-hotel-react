import React from "react";
import SearchResult from "./SearchResult";
import TableHeading from "./TableHeading";

const SearchResults = props => {
  return (
    <div>
      <table className="table table-striped table-bordered table-hover text-center">
        <TableHeading />
        <tbody>
          {props.results.map((info, index) => (
            <SearchResult info={info} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
