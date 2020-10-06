import React, { useState, useEffect } from "react";
import moment from "moment";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import CustomerProfile from "./CustomerProfile";

function SearchResults({ bookings, setBookings, newCustomerInfo }) {
  const [customerID, setCustomerID] = useState(null);

  useEffect(() => {
    if (newCustomerInfo) {
      newCustomerInfo.id = bookings[bookings.length - 1].id + 1;
      setBookings(bookings.concat(newCustomerInfo));
    }
  }, [newCustomerInfo]);

  return (
    <div>
      <table className="table">
        <TableHead />
        <tbody>
          {bookings.map((item, index) => {
            const nightsSpent = moment(item.checkOutDate).diff(
              item.checkInDate,
              "days"
            );
            return (
              <TableRow
                item={item}
                key={index}
                nightsSpent={nightsSpent}
                setCustomerID={setCustomerID}
              />
            );
          })}
        </tbody>
      </table>
      {customerID && <CustomerProfile id={customerID} />}
    </div>
  );
}

export default SearchResults;
