import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";
import NewBooking from "./NewBooking";

const itemsTitle = [
  <thead key={11} className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Room Number</th>
      <th scope="col">Check in</th>
      <th scope="col">Check Out</th>
      <th scope="col">Nights</th>
      <th scope="col">Profile</th>
    </tr>
  </thead>
];

const SearchResults = props => {
  const [id, setId] = useState(null);
  const [selectedRow, setSelectedRow] = useState([]);
  const { results, setBookings } = props;

  function Highlighter(id) {
    if (selectedRow.includes(id)) {
      // console.log(id);
      setSelectedRow(selectedRow.filter(el => el !== id));
    } else {
      setSelectedRow(selectedRow.concat(id));
    }
  }
  return (
    <div className="container">
      <table className="table">
        {itemsTitle}
        {results.map(booking => {
          // console.log(booking.id);
          return (
            <tbody key={booking.id}>
              <tr
                key={booking.id}
                style={
                  selectedRow.includes(booking.id)
                    ? { backgroundColor: "#f1f2f6" }
                    : { backgroundColor: "#fff" }
                }
                onClick={() => Highlighter(booking.id)}
              >
                <th scope="row">{booking.id}</th>
                <td>{booking.title}</td>
                <td>{booking.firstName}</td>
                <td>{booking.surname}</td>
                <td>{booking.email}</td>
                <td>{booking.roomId}</td>
                <td>{booking.checkInDate}</td>
                <td>{booking.checkOutDate}</td>
                <td>
                  {moment(booking.checkOutDate).diff(
                    moment(booking.checkInDate),
                    "days"
                  )}
                </td>
                <td>
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#staticBackdrop"
                    onClick={() => {
                      setId(booking.id);
                    }}
                    className="btn btn-outline-success"
                  >
                    Show Profile
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-backdrop="static"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Customer Profile
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {results ? <CustomerProfile key={id} id={id} /> : null}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        data-toggle="modal"
        data-target="#staticBackdrops"
        className="btn btn-success"
      >
        {" "}
        + Add Booking
      </button>
      <div
        className="modal fade"
        id="staticBackdrops"
        data-backdrop="static"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog " role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title " id="staticBackdropLabel">
                Add Booking
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <NewBooking setBookings={setBookings} results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
