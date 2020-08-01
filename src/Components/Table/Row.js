import React, { useState } from "react";
import moment from "moment";

const Row = ({ data, setIsShow, deleted, setDeleted }) => {
  const [selectedRow, setSelectedRow] = useState(false);
  const checkIn = moment(data.checkInDate);
  const checkOut = moment(data.checkOutDate);

  const deleteBooking = e => {
    const bookingId = e.target.value;
    fetch(
      "https://cyf-alexandru-hotel-server.herokuapp.com/bookings/" + bookingId,
      {
        method: "DELETE"
      }
    ).then(alert("booking deleted"));
    setDeleted(!deleted);
    window.location.reload();
  };

  return (
    <tr
      key={data._id}
      className={selectedRow ? "select" : ""}
      onClick={() => {
        setSelectedRow(!selectedRow);
      }}
    >
      <td>{data.firstName}</td>
      <td>{data.surname}</td>
      <td>{data.email}</td>
      <td>{data.roomId}</td>
      <td>{data.checkInDate}</td>
      <td>{data.checkOutDate}</td>
      <td className="booking-days">{checkOut.diff(checkIn, "days")}</td>
      <td className="show-profile">
        <button
          className="btn btn-primary"
          key={data._id}
          onClick={() => {
            console.log(data._id);
            setIsShow(data._id);
          }}
        >
          Show profile
        </button>
      </td>
      <td>
        <button
          className="btn btn-primary"
          value={data._id}
          onClick={deleteBooking}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Row;
