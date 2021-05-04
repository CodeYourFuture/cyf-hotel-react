import React, { useState } from "react";
import Row from "./Row";
import CustomerProfile from "./CustomerProfile";
import NewBooking from "./NewBooking";

const SearchResults = props => {
  const [id, setId] = useState(null);

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.result.map(data => (
            <Row
              data={data}
              key={data.id}
              setId={setId}
              deleteBookings={props.deleteBookings}
            />
          ))}
          <NewBooking />
        </tbody>
      </table>
      <CustomerProfile id={id} />
    </div>
  );
};

export default SearchResults;
