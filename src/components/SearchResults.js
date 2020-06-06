import React, { useState } from "react";
import moment from "moment";

const SearchResults = ({ results }) => {
  function calculateNumberOfNights(a, b) {
    return moment(a).diff(moment(b), "days");
  }

  const TableRow = ({ result }) => {
    const [isHighlighted, setIsHighlighted] = useState(false);

    return (
      <tr
        onClick={() => {
          setIsHighlighted(!isHighlighted);
        }}
        className={isHighlighted ? "highlighted" : ""}
      >
        <th scope="row">{result.id}</th>
        <td>{result.title}</td>
        <td>{result.firstName}</td>
        <td>{result.surname}</td>
        <td>{result.email}</td>
        <td>{result.roomId}</td>
        <td>{result.checkInDate}</td>
        <td>{result.checkOutDate}</td>
        <td>
          {calculateNumberOfNights(result.checkOutDate, result.checkInDate)}
        </td>
      </tr>
    );
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check In date</th>
          <th scope="col">Check Out date</th>
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {results.map((bookingDetails, index) => (
          <TableRow result={bookingDetails} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
