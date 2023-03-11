import React, { useState } from "react";
import moment from "moment";
import ResultRow from "./ResultRow";
import CustomerProfile from "./CustomerProfile";
// const obj = {a: 1, b: 2}

// const {a, b } = obj

const SearchResults = (props) => {
  const ourObject = props.results;
  // or to put {results} into curly braces in the parameter instead of writing this line
  const [id, setId] = useState("");
  return (
    <div>
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
            <ResultRow key={result.id} result={result} setId={setId} />
          ))}
        </tbody>
      </table>
      <CustomerProfile id={id} />
    </div>
  );
};

export default SearchResults;


