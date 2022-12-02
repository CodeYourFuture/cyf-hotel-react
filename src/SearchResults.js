import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const CustomerTable = ({ customerObject, error }) => {
  const [bookingID, setBookingID] = useState(null);

  const Row = ({ x }) => {
    const [isSelect, setSelected] = useState(false);

    const selectRow = e => {
      if (e.target.innerHTML !== "Show Profile") setSelected(!isSelect);
      else setBookingID(e.target.value);
    };

    return (
      <tr
        className={isSelect ? "bg-warning" : null}
        onClick={selectRow}
        key={x.id}
        id={x.id}
      >
        <td>{x.title}</td>
        <td>{x.firstName}</td>
        <td>{x.surname}</td>
        <td>{x.email}</td>
        <td>{x.roomId}</td>
        <td>{x.checkInDate}</td>
        <td>{x.checkOutDate}</td>
        <td>
          {~~moment
            .duration(moment(x.checkOutDate).diff(moment(x.checkInDate)))
            .asDays() + " nights"}
        </td>
        <td>
          <button className="button" value={x.id}>
            Show Profile
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <div className="table-responsive">
        <p id="result">Results ({customerObject.length} found)</p>

        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Room ID</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Duration of Stay</th>
            </tr>
          </thead>
          <tbody>
            {!error ? (
              customerObject.map((info, key) => {
                return <Row key={key} x={info} />;
              })
            ) : (
              <tr>
                <td colSpan="8">{error}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div>{bookingID && <CustomerProfile id={bookingID} />}</div>
    </div>
  );
};

export default CustomerTable;
