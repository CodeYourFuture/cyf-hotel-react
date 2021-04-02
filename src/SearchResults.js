import React, { useState } from "react";
import moment from "moment";
import Rows from "./Rows";
import CustomerProfile from "./CustomerProfile";

function SearchResults(props) {
  const [custId, setCustId] = useState(null);
  function handler(id) {
    setCustId(id);
  }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">FirstName</th>
            <th scope="col">SurName</th>
            <th scope="col">Email</th>
            <th scope="col">RoomId</th>
            <th scope="col">check-in date</th>
            <th scope="col">check-out date</th>
            <th scope="col">number-of-nights</th>
            <th scope="col" />
          </tr>
        </thead>
        {props.allBookings.map((el, index) => (
          <Rows
            handler={handler}
            key={index}
            id={el.id}
            title={el.title}
            firstName={el.firstName}
            surName={el.surname}
            email={el.email}
            roomId={el.roomId}
            checkInDate={el.checkInDate}
            checkOutDate={el.checkOutDate}
            numberOfNights={moment(el.checkOutDate).diff(
              moment(el.checkInDate),
              "days"
            )}
          />
        ))}
      </table>
      {custId && <CustomerProfile id={custId} />}
    </>
  );
}
export default SearchResults;
