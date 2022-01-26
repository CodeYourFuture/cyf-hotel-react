import React, { useState } from "react";
import Rows from "./Rows";
import CustomerProfile from "./CustomerProfile";
export default function SearchResults({ results }) {
  const [id, setId] = useState(null);
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">No of Nights Stayed</th>
            <th scope="col">Customer profile</th>
          </tr>
        </thead>
        <tbody>
          {results.map(data => (
            <Rows data={data} key={data.id} setId={setId} />
          ))}
        </tbody>
      </table>
      <CustomerProfile custId={id} />
    </>
  );
}
