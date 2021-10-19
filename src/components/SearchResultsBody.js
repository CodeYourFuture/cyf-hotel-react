import React from "react";
import TableRows from "./TableRows";

export default function SearchResultsBody({ bookings, setCustomerProfileId }) {
  const tableRows = bookings.map(booking => (
    <TableRows
      setCustomerProfileId={setCustomerProfileId}
      booking={booking}
      key={booking.id}
    />
  ));
  return <tbody className="tbodyContainer">{tableRows}</tbody>;
}
