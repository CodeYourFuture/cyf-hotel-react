import React, { useState } from "react";
import { sortInColumns } from "../../utils/functions";
// import moment from "moment";
// import fakeData from "../../data/fakeBookings.json";

const Columns = ({ data, setBookings }) => {
  const [sort, setSort] = useState(true);
  // const nights = data.map((Bookings) => {
  //   const checkIn = moment(Bookings.checkInDate);
  //   const checkOut = moment(Bookings.checkOutDate);
  //   return checkOut.diff(checkIn, "days");
  // });

  return (
    <thead className="thead-dark">
      <tr>
        {/* {Object.keys(fakeData).map((propriety, index) => {
          const colName = propriety;
          return (
            <th scope="col" key={index}>
              <button onClick={sortInColumns}>Sort</button>
              {colName.charAt(0).toUpperCase() + colName.slice(1)}
            </th>
          );
        })} */}
        <th>
          <button
            onClick={() => {
              sortInColumns("id", data, setBookings, sort, setSort);
            }}
          >
            Sort
          </button>
          Id
        </th>
        <th>
          <div>
            <button
              onClick={() => {
                sortInColumns("title", data, setBookings, sort, setSort);
              }}
            >
              Sort
            </button>
          </div>
          Title
        </th>
        <th>
          <div>
            <button
              onClick={() => {
                sortInColumns("firstName", data, setBookings, sort, setSort);
              }}
            >
              Sort
            </button>
          </div>
          First name
        </th>
        <th>
          <button
            onClick={() => {
              sortInColumns("surname", data, setBookings, sort, setSort);
            }}
          >
            Sort
          </button>
          Surname
        </th>
        <th>
          <button
            onClick={() => {
              sortInColumns("email", data, setBookings, sort, setSort);
            }}
          >
            Sort
          </button>
          Email
        </th>
        <th>
          <button
            onClick={() => {
              sortInColumns("roomId", data, setBookings, sort, setSort);
            }}
          >
            Sort
          </button>
          Room Id
        </th>
        <th>
          <div>
            <button
              onClick={() => {
                sortInColumns("checkIn", data, setBookings, sort, setSort);
              }}
            >
              Sort
            </button>
          </div>
          Check in date
        </th>
        <th>
          <div>
            <button
              onClick={() => {
                sortInColumns("checkOut", data, setBookings, sort, setSort);
              }}
            >
              Sort
            </button>
          </div>
          Check out date
        </th>

        <th>
          {/* <button
            onClick={() => {
              sortInColumns("nights");
            }}
          >
            Sort
          </button> */}
          Nights
        </th>
        <th>Profile</th>
      </tr>
    </thead>
  );
};

export default Columns;
