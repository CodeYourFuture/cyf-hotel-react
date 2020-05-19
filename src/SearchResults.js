import React from "react";
import moment from "moment";

const SearchResults = props => {
  return (
    <table className="table">
      <thead className="table-head">
        <tr>
          <td>id</td>
          <td>title</td>
          <td>first name</td>
          <td>sure name</td>
          <td>email</td>
          <td>room id</td>
          <td>check in date</td>
          <td>check out date</td>
          <td>nights</td>
        </tr>
      </thead>
      <tbody className="table-body table-striped">
        {props.results.map(result => {
          return (
            <tr key={result.id}>
              <td>{result.id}</td>
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
              <td>{result.roomId}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
              <td>{getDuration(result.checkOutDate, result.checkInDate)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

function getDuration(start, end) {
  var start = moment(start); //todays date
  var end = moment(end); // another date
  var duration = moment.duration(start.diff(end));
  var days = duration.asDays();
  return Math.round(days);
}

export default SearchResults;
