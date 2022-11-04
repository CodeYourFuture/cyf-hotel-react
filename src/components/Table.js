import React from "react";
import TableHead from "./TableHead";
import tableCol from "../data/tableCol";
import TableBody from "./TableBody";
import fakeBooking from "../data/fakeBookings.json";

const createTableHead = thead => {
  return <TableHead colName={thead} />;
};

const createTableBody = tbody => {
  return (
    <TableBody
      Key={tbody.id}
      title={tbody.title}
      firstName={tbody.firstName}
      surName={tbody.surname}
      email={tbody.email}
      roomId={tbody.roomId}
      checkIn={tbody.checkInDate}
      checkOut={tbody.checkOutDate}
      days={Math.ceil(
        Math.abs(new Date(tbody.checkInDate) - new Date(tbody.checkOutDate)) /
          (1000 * 60 * 60 * 24)
      )}
    />
  );
};

const Table = () => {
  return (
    <table class="table">
      <thead>
        <tr>{tableCol.map(createTableHead)}</tr>
      </thead>
      <tbody>{fakeBooking.map(createTableBody)}</tbody>
    </table>
  );
};

export default Table;
