import React from "react";
import TableRows from "./TableRows";

export default function SearchResultsBody({ bookings }) {
  const tableRows = bookings.map(booking => (
    <TableRows booking={booking} key={booking.id} />
  ));
  return <tbody>{tableRows}</tbody>;
}
