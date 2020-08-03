import React, { useState } from "react";
import HeadingRow from "./HeadingRow";
import BodyRow from "./BodyRow";
import CustomerProfile from "./CustomerProfile";
import moment from "moment";

const SearchResults = ({ results, setBooking }) => {
  const [customerId, setCustomerId] = useState(null);
  const [isSorted, setIsSorted] = useState({
    title: false,
    firstName: false,
    surname: false,
    email: false,
    roomId: false,
    checkInDate: false,
    checkOutDate: false,
    numOfNight: false
  });

  const sortBookings = event => {
    let sortedBookings = [];
    let reversedBookings = [];
    let key = event.target.title;
    console.log(key);
    if (!isSorted.key) {
      if (key == "roomId") {
        sortedBookings = results.sort((a, b) => a[key] - b[key]);
      } else if (key == "numOfNight") {
        sortedBookings = results.sort(
          (a, b) =>
            moment(a.checkOutDate).diff(a.checkInDate, "days") -
            moment(b.checkOutDate).diff(b.checkInDate, "days")
        );
      } else
        sortedBookings = results.sort((a, b) => a[key].localeCompare(b[key]));
      setIsSorted(true);
      setBooking([...sortedBookings]);
    } else {
      if (key == "roomId") {
        reversedBookings = results.sort((a, b) => b[key] - a[key]);
      } else if (key == "numOfNight") {
        reversedBookings = results.sort(
          (a, b) =>
            moment(b.checkOutDate).diff(b.checkInDate, "days") -
            moment(a.checkOutDate).diff(a.checkInDate, "days")
        );
      } else
        reversedBookings = results.sort((a, b) => b[key].localeCompare(a[key]));
      setBooking([...reversedBookings]);
      setIsSorted(false);
    }
  };

  return (
    <div>
      <table className="table">
        <thead>
          <HeadingRow sortBookings={sortBookings} />
        </thead>
        <tbody>
          {results.map((result, index) => (
            <BodyRow
              key={index}
              content={result}
              setCustomerId={setCustomerId}
              sortBookings={sortBookings}
            />
          ))}
        </tbody>
      </table>

      {customerId ? <CustomerProfile customerId={customerId} /> : null}
    </div>
  );
};

export default SearchResults;
