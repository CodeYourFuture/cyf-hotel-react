import React from "react";
import moment from "moment";

const TableHead = () => {
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Title</th>
        <th scope="col">First Name</th>
        <th scope="col">Surname</th>
        <th scope="col">Email</th>
        <th scope="col">Room ID</th>
        <th scope="col">Check-In Date</th>
        <th scope="col">Check-Out Date</th>
        <th scope="col">No. of Nights</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  return (
    <tbody>
      {props.result.map((elem, index) => (
        <tr key={index}>
          <th scope="row">{elem.id}</th>
          <td>{elem.title}</td>
          <td>{elem.firstName}</td>
          <td>{elem.surname}</td>
          <td>{elem.email}</td>
          <td>{elem.roomId}</td>
          <td>{elem.checkInDate}</td>
          <td>{elem.checkOutDate}</td>
          <td>
            {moment(elem.checkOutDate).diff(moment(elem.checkInDate), "days")}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const SearchResults = props => {
  return (
    <div>
      <table className="table">
        <TableHead />
        <TableBody result={props.results} />
      </table>
    </div>
  );
};

export default SearchResults;
