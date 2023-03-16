import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";
import NewBookings from "./NewBookings";


const getDaysDifference = (date1, date2) => {
  let a = moment(date1);
  let b = moment(date2);
  return a.diff(b, 'days')

}

const SearchResults = (props) => {
  const [selectedId, setselectedId] = useState(undefined);
  const [clickIdProfile, setClickIdProfile] = useState(undefined);

  const rowHighlight = (bookingId) => {
    setselectedId(bookingId);
  }
  const clickHandler = (bookingId) => {
    setClickIdProfile(bookingId)
  }

  return (
    <>
      <table className="table" >
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>first name</th>
            <th>surname</th>
            <th>email</th>
            <th>room id</th>
            <th>check in date</th>
            <th>check out date</th>
            <th>number of nights</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((booking) => {
            return (
              <tr key={booking.id}
                onClick={() => rowHighlight(booking.id)}
                style={{ backgroundColor: selectedId === booking.id ? "purple" : "" }}
              >
                <td>{booking.id}</td>
                <td>{booking.title}</td>
                <td>{booking.firstName}</td>
                <td>{booking.surname}</td>
                <td>{booking.email}</td>
                <td>{booking.roomId}</td>
                <td>{booking.checkInDate}</td>
                <td>{booking.checkOutDate}</td>
                <td>{getDaysDifference(booking.checkOutDate, booking.checkInDate)}</td>
                <td><button onClick={() => clickHandler(booking.id)}>Show Profile</button></td>
              </tr>

            )
          })}

        </tbody>
      </table>
      <CustomerProfile id={clickIdProfile} />
    </>
  );
};
export default SearchResults;
