import { useState } from "react";
import moment from "moment";
import Row from "./Row";



const SearchResults = (props) => {

const book = props.results;

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
        </thead>
        <tbody>
          {book.map((result) => (
            <Row key={result.id} result={result} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
