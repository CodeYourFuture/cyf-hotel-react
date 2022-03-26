import React, { useState } from "react";
import moment from "moment";

function TableHead() {
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Title</th>
        <th scope="col">First-Name</th>
        <th scope="col">Sur-Name</th>
        <th scope="col">Email-Id</th>
        <th scope="col">Room#</th>
        <th scope="col">Check In Date</th>
        <th scope="col">Check Out Date</th>
        <th scope="col">Nights Stay</th>
      </tr>
    </thead>
  );
}

function TableRow(props) {
  const [selected, setSelected] = useState("nothighlited");
  function changeColor() {
    setSelected(selected => {
      if (selected === "nothighlighted") {
        return "highlighted";
      } else {
        return "nothighlighted";
      }
    });
  }

  return (
    <tr className={selected} onClick={changeColor}>
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
          "Days"
        )}
      </td>
    </tr>
  );
}

function TableBody(props) {
  return (
    <tbody>
      {props.bookings.map((booking, index) => (
        <TableRow
          booking={booking}
          key={index}
          handleClick={props.handleClick}
        />
      ))}
    </tbody>
  );
}

function SearchResults(props) {
  const [displayControlHandler] = useState(false);
  const [setCustomerId] = useState(null);
  function handleClick(e, id) {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(response => response.json())
      .then(data => {
        setCustomerId(data);
        console.log(data);
        displayControlHandler(true);
      });
  }
  return (
    <div>
      <table className="table">
        <TableHead />
        <TableBody bookings={props.results} handleClick={handleClick} />
      </table>
    </div>
  );
}

export default SearchResults;
