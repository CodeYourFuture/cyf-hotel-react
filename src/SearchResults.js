import React from "react";
import HeadingRow from "./HeadingRow";
import BodyRow from "./BodyRow";

const SearchResults = ({ results }) => {
  return (
    <table className="table">
      <thead>
        <HeadingRow />
      </thead>
      <tbody>
        {results.map((field, index) => {
          return <BodyRow key={field.id} field={field} />;
        })}
      </tbody>
    </table>
  );
};
export default SearchResults;
