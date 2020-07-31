import React from "react";
import moment from "moment";

const SearchResults = props => {
  return (
    <table className="table">
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
              <td>{NumberNights(result)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

function NumberNights(result) {
  let checkIn = moment(formatedDate(result.checkInDate));
  let checkOut = moment(formatedDate(result.checkOutDate));

  return checkOut.diff(checkIn, "days");
}

function formatedDate(string) {
  string = string.split("-");
  let result = string.map(str => Number(str));
  return result;
}

export default SearchResults;
