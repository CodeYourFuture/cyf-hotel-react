import React, { useState } from "react";
import Moment from "react-moment";

function CreateRowTable({ customer }) {
  const [select, setselect] = useState(false);

  function changeColour() {
    setselect(!select);
  }
  return (
    <tr
      style={{ backgroundColor: select ? "yellow" : "white" }}
      onClick={changeColour}
      // onDoubleClick={backColor}
    >
      <th scope="row">{customer.id}</th>
      <td>{customer.title}</td>
      <td>{customer.firstName}</td>
      <td>{customer.surname}</td>
      <td>{customer.email}</td>
      <td>{customer.roomId}</td>
      <td>
        <Moment format="DD-MM-YYYY">{customer.checkInDate}</Moment>
      </td>
      <td>
        <Moment format="DD-MM-YYYY">{customer.checkOutDate}</Moment>
      </td>
      <td>
        <Moment diff={customer.checkInDate} unit="days">
          {customer.checkOutDate}
        </Moment>
      </td>
    </tr>
  );
}

function SearchResults({ results }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">e-mail</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Nights of stay</th>
        </tr>
      </thead>
      <tbody>
        {results.map((customer, index) => (
          <CreateRowTable key={index} customer={customer} />
        ))}
        {/* { results.map(CreateRowTable)} */}
      </tbody>
    </table>
  );
}

export default SearchResults;
