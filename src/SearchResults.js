import moment from "moment";
import React, { useState } from "react";

const TableHead = () => {
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Title</th>
        <th scope="col">First Name</th>
        <th scope="col">Surname</th>
        <th scope="col">email</th>
        <th scope="col">Room #</th>
        <th scope="col">Check in date</th>
        <th scope="col">Check out date</th>
        <th scope="col">Number of Night(s)</th>
      </tr>
    </thead>
  );
};

const TableRow = props => {
  const [highLight, setHighlight] = useState("noColor");
  const highlightRow = () => {
    setHighlight(highLight => {
      if (highLight === "noColor") {
        return "color";
      } else {
        return "noColor";
      }
    });
  };

  return (
    <tr onClick={highlightRow} className={highLight}>
      <th scope="row">{props.booking.id}</th>
      <td>{props.booking.title}</td>
      <td>{props.booking.firstName}</td>
      <td>{props.booking.surname}</td>
      <td>{props.booking.email}</td>
      <td>{props.booking.roomId}</td>
      <td>{props.booking.checkInDate}</td>
      <td>{props.booking.checkOutDate}</td>
      <td>
        {moment(props.booking.checkOutDate).diff(
          moment(props.booking.checkInDate),
          "days"
        )}
      </td>
    </tr>
  );
};

const TableBody = props => {
  return (
    <tbody>
      {props.bookings.map((booking, index) => (
        <TableRow booking={booking} key={index} />
      ))}
    </tbody>
  );
};

const SearchResults = props => {
  return (
    <div>
      <table className="table">
        <TableHead />
        <TableBody bookings={props.results} />
      </table>
    </div>
  );
};

export default SearchResults;
