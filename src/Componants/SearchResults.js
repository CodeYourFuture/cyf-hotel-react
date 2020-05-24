import React from "react";

const SearchResults = props => {
  return (
    <table class="table table-hover table-dak">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {props.fakeBookings.map(bookingInfo => {
          return (
            <tr key={bookingInfo.id}>
              <td>{bookingInfo.id}</td>
              <td>{bookingInfo.title}</td>
              <td>{bookingInfo.firstName}</td>
              <td>{bookingInfo.surname}</td>
              <td>{bookingInfo.email}</td>
              <td>{bookingInfo.roomId}</td>
              <td>{bookingInfo.checkInDate}</td>
              <td>{bookingInfo.checkOutDate}</td>
              {/* <td>{night(bookingInfo.checkInDate, bookingInfo.checkOutDate)}</td>              */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// function night(a, b){

//         let a = moment();
//         let b = moment();
//         a.diff(b, 'days')

// var a = moment(checkIn);
// var b = moment(checkOut);
// a.diff(b, 'days')

// }

export default SearchResults;
