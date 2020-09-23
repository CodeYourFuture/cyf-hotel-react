import React from "react";
import FakeBookings from "./FakeBookings";
import moment from "moment";
// import {BootstrapTable, TableHeaderColumn} from
//        'react-bootstrap-table'
// import '../css/Table.css'
// import '../dist/react-bootstrap-table-all.min.css'

const SearchResults = ({ results }) => {
  // let NumberOfNights =
  return (
    <table class="table">
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
        {results.map(item => (
          <tr>
            {/* <th scope="row">1</th> */}
            <td>{item.title}</td>
            <td>{item.firstName}</td>
            <td>{item.surname}</td>
            <td>{item.email}</td>
            <td>{item.roomId}</td>
            <td>{item.checkInDate}</td>
            <td>{item.checkOutDate}</td>
            <td>
              {moment(item.checkOutDate).diff(moment(item.checkInDate), "days")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
