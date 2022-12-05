import React from "react";

const SearchResults = props => {
  return (
    <table>
      {props.results.map(element => {
        return (
          <tr>
            <td>{element.id}</td>
            <td>{element.title}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default SearchResults;
