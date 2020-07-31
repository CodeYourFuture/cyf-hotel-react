import React from "react";

const SearchResults = props => {
  return (
    <table class="table">
      <thead>
        <tr>
          {Object.keys(props.results[0]).map(function(key) {
            return <th scope="col">{key}</th>;
          })}
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(result => {
          return (
            <tr>
              {Object.keys(result).map(function(key) {
                return <td>{result[key]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
