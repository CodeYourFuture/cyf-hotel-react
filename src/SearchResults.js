import React, { useState } from "react";
import classNames from "classnames";
import BookingGaust from "./BookingGaust";

function SearchResults(props) {
  const [highlight, setHighlight] = useState(null);

  return (
    <table className="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">title</th>
          <th scope="col">First</th>
          <th scope="col">sureaname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in data</th>
          <th scope="col">check out data</th>
          <th scope="col">nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((result, index) => (
          <tr
            key={index}
            onClick={() => setHighlight(highlight === index ? null : index)}
            className={classNames("salem", {
              hidde: highlight === index,
              show: highlight !== index
            })}
          >
            <td>{result.title}</td>
            <td>{result.firstName}</td>
            <td>{result.surname}</td>
            <td>{result.email}</td>
            <td>{result.roomId}</td>
            <td>{result.checkInDate}</td>
            <td>{result.checkOutDate}</td>
            <td>{<BookingGaust guest={result} />} Days</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default SearchResults;
