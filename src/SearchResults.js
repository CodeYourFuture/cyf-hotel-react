import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import RowTable from "./RowTable";
function SearchResults(props) {
  const [customerId, setCustomerId] = useState("");
  const [sorted, setSorted] = useState(0);
  const [booking, setBooking] = useState(props.results);
  function sortNum(event) {
    console.log(event.target.innerText);
    if (sorted % 2 === 0) {
      if (event.target.innerText === "ID")
        setBooking(booking.sort((a, b) => a.id - b.id).reverse());
      else if (event.target.innerText === "Title")
        setBooking(
          booking
            .sort((a, b) => (a.title > b.title) - (a.title < b.title))
            .reverse()
        );
      else if (event.target.innerText === "Email")
        setBooking(
          booking
            .sort((a, b) => (a.email > b.email) - (a.email < b.email))
            .reverse()
        );
      else if (event.target.innerText === "RoomID")
        setBooking(booking.sort((a, b) => a.roomId - b.roomId).reverse());
      else if (event.target.innerText === "First Name")
        setBooking(
          booking
            .sort(
              (a, b) =>
                (a.firstName > b.firstName) - (a.firstName < b.firstName)
            )
            .reverse()
        );
      else if (event.target.innerText === "Surname")
        setBooking(
          booking
            .sort((a, b) => (a.surname > b.surname) - (a.surname < b.surname))
            .reverse()
        );
      else if (event.target.innerText === "Check in Date")
        setBooking(
          booking
            .sort(
              (a, b) =>
                (a.checkInDate > b.checkInDate) -
                (a.checkInDate < b.checkInDate)
            )
            .reverse()
        );
      else if (event.target.innerText === "Check out Date")
        setBooking(
          booking
            .sort(
              (a, b) =>
                (a.checkOutDate > b.checkOutDate) -
                (a.checkOutDate < b.checkOutDate)
            )
            .reverse()
        );
    } else {
      if (event.target.innerText === "ID")
        setBooking(booking.sort((a, b) => a.id - b.id));
      else if (event.target.innerText === "Title")
        setBooking(
          booking.sort((a, b) => (a.title > b.title) - (a.title < b.title))
        );
      else if (event.target.innerText === "Email")
        setBooking(
          booking.sort((a, b) => (a.email > b.email) - (a.email < b.email))
        );
      else if (event.target.innerText === "RoomID")
        setBooking(booking.sort((a, b) => a.roomId - b.roomId));
      else if (event.target.innerText === "First Name")
        setBooking(
          booking.sort(
            (a, b) => (a.firstName > b.firstName) - (a.firstName < b.firstName)
          )
        );
      else if (event.target.innerText === "Surname")
        setBooking(
          booking.sort(
            (a, b) => (a.surname > b.surname) - (a.surname < b.surname)
          )
        );
      else if (event.target.innerText === "Check in Date")
        setBooking(
          booking.sort(
            (a, b) =>
              (a.checkInDate > b.checkInDate) - (a.checkInDate < b.checkInDate)
          )
        );
      else if (event.target.innerText === "Check out Date")
        setBooking(
          booking.sort(
            (a, b) =>
              (a.checkOutDate > b.checkOutDate) -
              (a.checkOutDate < b.checkOutDate)
          )
        );
    }
    setSorted(sorted + 1);
  }

  const selectCustomer = customerId => {
    setCustomerId(customerId);
  };
  return (
    <div>
      <table className="table table-hover">
        <thead className="thead-light">
          <tr>
            <th className="set-pointer" scope="col" onClick={sortNum}>
              ID
            </th>
            <th className="set-pointer" scope="col" onClick={sortNum}>
              Title
            </th>
            <th className="set-pointer" scope="col" onClick={sortNum}>
              First Name
            </th>
            <th className="set-pointer" scope="col" onClick={sortNum}>
              Surname
            </th>
            <th className="set-pointer" scope="col" onClick={sortNum}>
              Email
            </th>
            <th className="set-pointer" scope="col" onClick={sortNum}>
              RoomID
            </th>
            <th className="set-pointer" scope="col" onClick={sortNum}>
              Check in Date
            </th>
            <th className="set-pointer" scope="col" onClick={sortNum}>
              Check out Date
            </th>
            <th
              className="set-pointer"
              name="nights"
              scope="col"
              onClick={sortNum}
            >
              Number of Nights
            </th>
            <th />
            <th />
          </tr>
        </thead>
        {booking.map((book, index) => (
          <tbody key={"tbody" + index}>
            <RowTable book={book} selectCustomer={selectCustomer} />
          </tbody>
        ))}
      </table>
      <CustomerProfile id={customerId} />
    </div>
  );
}

export default SearchResults;
