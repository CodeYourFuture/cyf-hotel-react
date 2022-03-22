import React from "react";
import FakeBookings from "./data/fakeBookings.json";
import moment from "moment";

// function difference () {
//   let a = moment([2007, 0, 29]);
//   let b = moment([2007, 0, 28]);
//   a.diff(b, 'days')
// }

function SearchResults() {
  const DisplayData = FakeBookings.map(info => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.title}</td>
        <td>{info.firstName}</td>
        <td>{info.surname}</td>
        <td>{info.email}</td>
        <td>{info.roomId}</td>
        <td>{info.checkInDate}</td>
        <td>{info.checkOutDate}</td>
        <td>
          {moment(info.checkOutDate).diff(moment(info.checkInDate), "day")}
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">No of Nights</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default SearchResults;
