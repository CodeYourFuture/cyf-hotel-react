import React from "react";

const SearchResults = props => {
  return (
    <table class="table">
      <thead>
        <tr>
          {Object.keys(props.results[0]).map(function(key) {
            return <th scope="col">{key}</th>;
          })}
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

/* 


    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
 {props.results.map((result) => {
        return <li>{result.id}</li>;
      })}
        </tr>
        
      </tbody>
    </table>
  ); */

export default SearchResults;
