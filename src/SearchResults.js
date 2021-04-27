import React from "react";
import moment from "moment";

//id, title, firstName, surname, email, roomID, checkinDate, checkoutDate, nights
const SearchResults = props => (
  <table className="table">
    <thead>
      <tr className="tr">
        <th scope="col" className="th">
          Id
        </th>
        <th scope="col">Title</th>
        <th scope="col">First name</th>
        <th scope="col">Surname</th>
        <th scope="col">Email</th>
        <th scope="col">Room id</th>
        <th scope="col">Check in date</th>
        <th scope="col">Check out date</th>
        <th scope="col">Nights</th>
      </tr>
    </thead>
    <tbody>
      {props.results.map((info, index) => {
        return (
          <tr key={index}>
            <th scope="row">{info.id}</th>
            <td>{info.title}</td>
            <td>{info.firstName}</td>
            <td>{info.surname}</td>
            <td>{info.email}</td>
            <td>{info.roomId}</td>
            <td>{info.checkInDate}</td>
            <td>{info.checkOutDate}</td>
            <td>
              {moment(info.checkOutDate, "YYYY/MM/DD").diff(
                moment(info.checkInDate, "YYYY/MM/DD"),
                "days"
              )}
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default SearchResults;
