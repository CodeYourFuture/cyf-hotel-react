import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

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
        <th scope="col">Profile</th>
      </tr>
    </thead>
  );
};

const TableRow = props => {
  const [selected, setSelected] = useState("notHighlighted");
  const highlight = () => {
    setSelected(selected => {
      if (selected === "notHighlighted") {
        return "highlight";
      } else {
        return "notHighlighted";
      }
    });
  };

  const [bookingId, setBookingId] = useState("null");
  const profileClick = elem => {
    console.log("profile", elem);
    setBookingId(1);
  };

  return (
    <tr className={selected} onClick={highlight}>
      <th scope="row">{props.booking.id}</th>
      <td>{props.booking.title}</td>
      <td>{props.booking.firstName}</td>
      <td>{props.booking.surname}</td>
      <td>{props.booking.email}</td>
      <td>{props.booking.roomId}</td>
      <td>{props.booking.checkInDate}</td>
      <td>{props.booking.checkOutDate}</td>
      <td>
        {moment(props.booking.checkOutDate).diff(
          moment(props.booking.checkInDate),
          "days"
        )}
      </td>
      <td>
        <button className="btn btn-success" onClick={profileClick}>
          Show Profile
        </button>
      </td>
    </tr>
  );
};

const TableBody = props => {
  return (
    <tbody>
      {props.result.map((booking, index) => (
        <TableRow booking={booking} key={index} />
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
        <ProfileTable bookingId={bookingId} />{" "}
        {/* want to create a new component for profile */}
      </table>
    </div>
  );
};

export default SearchResults;
