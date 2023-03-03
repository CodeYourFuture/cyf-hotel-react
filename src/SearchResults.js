import React from "react";
import fakeBookings from "./data/fakeBookings.json";
import moment from "moment";

const SearchResults = (props) => (
  <table className="table table-striped">
    <CreateTableHeader />
    <CreateEachRow results={fakeBookings} />
  </table>
);

const CreateTableHeader = () => (
  <thead className="tableHead">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">First Name</th>
      <th scope="col">Surname</th>
      <th scope="col">Email</th>
      <th scope="col">Room ID</th>
      <th scope="col">Check In Date</th>
      <th scope="col">Check Out Date</th>
      <th scope="col">TotalNights</th>
    </tr>
  </thead>
);

const CreateEachRow = (props) => (
  <tbody className="tableBody">
    {props.results.map((item, index) => (
      <tr key={index}>
        <td scope="row">{item.id}</td>
        <td>{item.title}</td>
        <td>{item.firstName}</td>
        <td>{item.surname}</td>
        <td>{item.email}</td>
        <td>{item.roomId}</td>
        <td>{item.checkInDate}</td>
        <td>{item.checkOutDate}</td>
        <td>
          {
            moment(item.checkOutDate).diff(moment(item.checkInDate), "days")
            // moment(eachPerson.checkOutDate.split("-")).diff(moment(eachPerson.checkInDate.split("-"))np, 'days')
          }
        </td>
      </tr>
    ))}
  </tbody>
);

export default SearchResults;
