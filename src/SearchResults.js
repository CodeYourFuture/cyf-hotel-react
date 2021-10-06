import React from "react";
//import SearchButton from "./SearchButton";

const SearchResults = props => (
  <div>
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room Id</th>
          <th>Check In</th>
          <th>Check Out</th>
        </tr>
      </thead>
      <tbody>
        {/* 
       <tr>
          <td>1</td>
          <td>Mr</td>
          <td>Abadi</td>
          <td>Salman</td>
          <td>a.s@gmail.com</td>
          <td>005</td>
          <td>15:30</td>
          <td>17:00</td>
        </tr>
       */}
        {props.results.map(result => (
          <tr>
            <td>{result.id}</td>
            <td>{result.title}</td>
            <td>{result.firstName}</td>
            <td>{result.surname}</td>
            <td>{result.email}</td>
            <td>{result.roomId}</td>
            <td>{result.checkInDate}</td>
            <td>{result.checkOutDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export default SearchResults;
