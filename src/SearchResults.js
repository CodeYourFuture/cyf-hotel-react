import React from "react";
import "./SearchResults.css";
import data from "./data/fakeBookings.json";
import moment from "moment";

// const numberOfNights()

const SearchResults = () => {
  console.log(data);

  return (
    <table className="table">
      <tr>
        <td>ID</td>
        <td>Tittle</td>
        <td>First Name</td>
        <td>Surname</td>
        <td>Email</td>
        <td>Room ID</td>
        <td>check in Date</td>
        <td>check out Date</td>
        <td>No of Night stay</td>
      </tr>

      {data.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.firstName}</td>
            <td>{item.surname}</td>
            <td>{item.email}</td>
            <td>{item.roomId}</td>
            <td>{item.checkInDate}</td>
            <td>{item.checkOutDate}</td>
            <td>{}</td>
          </tr>
        );
      })}
    </table>
  );
};
export default SearchResults;
