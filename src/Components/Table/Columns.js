import React, { useState } from "react";
import { sortInColumns } from "../../utils/functions";

const Columns = ({ data, setBookings }) => {
  const [sort, setSort] = useState(true);

  return (
    <thead className="thead-dark">
      <tr>
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

        <th>Nights</th>
        <th>Profile</th>
      </tr>
    </thead>
  );
};

export default Columns;
