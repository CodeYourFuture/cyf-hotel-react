import React, { useState, useEffect } from "react";
import CustomerProfile from "../components/CustomerProfile";
const moment = require("moment");

const numberOfNights = (dayIn, dayOut) => {
  const dayInToMoment = moment(dayIn);
  const dayOutToMoment = moment(dayOut);

  return dayOutToMoment.diff(dayInToMoment, "days");
};

const SearchResults = prop => {
  const [bookings, setBookings] = useState([]);
  const [orderBookings, setOrderBookings] = useState(true);
  const [selected, setSelected] = useState({});
  const [id, setId] = useState("");
  useEffect(() => {
    setBookings(prop.results);
  }, [prop.results]);
  console.log(prop.results);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Checkout date</th>
            <th scope="col">Number of Nights</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(
            (
              {
                checkInDate,
                checkOutDate,
                email,
                firstName,
                id,
                roomId,
                surname,
                title
              },
              i
            ) => {
              if (!selected[i]) setSelected({ ...selected, [i]: "white" });

              return (
                <tr
                  key={i}
                  className={selected[i]}
                  onClick={() =>
                    selected[i] === "white"
                      ? setSelected({ ...selected, [i]: "red" })
                      : setSelected({ ...selected, [i]: "white" })
                  }
                >
                  <th scope="row">{id}</th>
                  <th>{title}</th>
                  <th>{firstName}</th>
                  <th>{surname}</th>
                  <th>{email}</th>
                  <th>{roomId}</th>
                  <th>{checkInDate}</th>
                  <th>{checkOutDate}</th>
                  <th>{numberOfNights(checkInDate, checkOutDate)}</th>
                  <th>
                    <button onClick={() => setId(id)}>Show profile</button>
                  </th>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
      <CustomerProfile id={id} />
    </>
  );
};

export default SearchResults;
