import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const CustomerTable = ({ customerObject, error, handleSort }) => {
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
          <button className="btn btn-primary" value={x.id}>
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
              <th onClick={handleSort}>Title</th>
              <th onClick={handleSort}>First Name</th>
              <th onClick={handleSort}>Last Name</th>
              <th onClick={handleSort}>Email</th>
              <th onClick={handleSort}>Room ID</th>
              <th onClick={handleSort}>Check In</th>
              <th onClick={handleSort}>Check Out</th>
              <th>Duration of Stay</th>
              <th>Guests Profile</th>
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
