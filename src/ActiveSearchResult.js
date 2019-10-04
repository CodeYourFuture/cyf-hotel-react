import React from "react";
var FakeBookings = require("./data/fakeBookings.json");
var moment = require("moment");

function findBookingObj(input) {
  return FakeBookings.find(obj => obj.id === input);
}

const SearchResults = () => {
  let tableContent;
  let bookingList = function findBookingObj(input) {
    return FakeBookings.find(obj => obj.id === input);
  };

  if (bookingList !== undefined) {
    tableContent = (
      <table className="table table-striped table-bordered table-hover table-sm text-center">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check IN</th>
            <th scope="col">Check Out</th>
            <th scope="col">Day(s) Staying</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{bookingList.id}</th>
            <td>{bookingList.title}</td>
            <td>{bookingList.firstName}</td>
            <td>{bookingList.surname}</td>
            <td>{bookingList.email}</td>
            <td>{bookingList.roomId}</td>
            <td>{bookingList.checkInDate}</td>
            <td>{bookingList.checkOutDate}</td>
            <td>
              {moment(bookingList.checkOutDate).diff(
                bookingList.checkInDate,
                "days"
              )}
            </td>
          </tr>
        </tbody>
      </table>
    );
  } else {
    <table />;
  }
  return tableContent;
};

export default SearchResults;
