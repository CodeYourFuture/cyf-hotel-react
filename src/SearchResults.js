import React, { useState } from "react";
import moment from "moment";

const SearchResults = (props) => {
  const [row, setRow] = useState(false);

  const highlightRow = () => {
    setRow(!row);
  };


  return (
    <div className="table">
      <table className="table table-hover">
        <thead>
          <tr>
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
          {props.results.map((result) => (
            <tr
              key={result.id}
              onClick={highlightRow}
              className={row ? "change" : null}
            >
              <th scope="col">{result.title}</th>
              <th scope="col">{result.firstName}</th>
              <th scope="col">{result.surname}</th>
              <th scope="col">{result.email}</th>
              <th scope="col">{result.roomId}</th>
              <th scope="col">{result.checkInDate}</th>
              <th scope="col">{result.checkOutDate}</th>
              <th scope="col">
                {moment(result.checkOutDate).diff(result.checkInDate, "days")}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
