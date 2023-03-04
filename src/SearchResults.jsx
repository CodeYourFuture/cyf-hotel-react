import React, { useState } from "react";
import moment from "moment";
import ResultRow from "./ResultRow";
// const obj = {a: 1, b: 2}

// const {a, b } = obj

const SearchResults = (props) => {
  const ourObject = props.results;
  // or to put {results} into curly braces in the parameter instead of writing this line

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {ourObject.map((result) => (
          <ResultRow key={result.id} result={result} />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;

// 15. Highlight booking row when clicked
// Instructions: Within the <SearchResults /> component or its child components, add an
// onClick handler to each row in the table (hint: on the <tr> element). When clicked, the row is "selected"
// and highlighted with a different colour. When clicked again, the row is unselected and the coloured highlighting
// is removed.

// Hint: Use a new state variable for each row to record if the row is selected or not, and use this value to
// set a class to the className prop of the row.

// Test: Verify that each row of your table can be highlighted (on and off) independently when being clicked.
