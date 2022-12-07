import React from "react";
import moment from "moment";

const SearchResults = props => {
  const [selected, setSelected] = React.useState(true);
  const [highlight, setHighlight] = React.useState("");

  function selectTheRow() {
    setSelected(prevState => !prevState);
    selected ? setHighlight("highlight") : setHighlight("");
  }

  return (
    <div className="table-container">
      <table className="table-set table-bordered">
        <thead className="table-head">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email Address</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Number of nights</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((booking, index) => {
            let inDate = moment(booking.checkInDate);
            let outDate = moment(booking.checkOutDate);
            let numOfNights = outDate.diff(inDate, "days");
            return (
              <tr key={index} className={highlight} onClick={selectTheRow}>
                <td>{booking.id}</td>
                <td>{booking.title}</td>
                <td>{booking.firstName}</td>
                <td>{booking.surname}</td>
                <td>{booking.email}</td>
                <td>{booking.roomId}</td>
                <td>{booking.checkInDate}</td>
                <td>{booking.checkOutDate}</td>
                <td>{numOfNights}</td>
                <button className="btn show-profile">Show Profile</button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
