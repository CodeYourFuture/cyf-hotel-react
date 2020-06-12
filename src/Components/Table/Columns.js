import React from "react";
// import moment from "moment";
// import fakeData from "../../data/fakeBookings.json";

const Columns = ({ data, sortInColumns }) => {
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
              sortInColumns("id");
            }}
          >
            Sort
          </button>
          Id
        </th>
        <th>
          <button
            onClick={() => {
              sortInColumns("title");
            }}
          >
            Sort
          </button>
          Title
        </th>
        <th>
          <button
            onClick={() => {
              sortInColumns("firstName");
            }}
          >
            Sort
          </button>
          First name
        </th>
        <th>
          <button
            onClick={() => {
              sortInColumns("surname");
            }}
          >
            Sort
          </button>
          Surname
        </th>
        <th>
          <button
            onClick={() => {
              sortInColumns("email");
            }}
          >
            Sort
          </button>
          Email
        </th>
        <th>
          <button
            onClick={() => {
              sortInColumns("roomId");
            }}
          >
            Sort
          </button>
          Room Id
        </th>
        <th>
          <button
            onClick={() => {
              sortInColumns("checkIn");
            }}
          >
            Sort
          </button>
          Check in date
        </th>
        <th>
          <button
            onClick={() => {
              sortInColumns("checkOut");
            }}
          >
            Sort
          </button>
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
